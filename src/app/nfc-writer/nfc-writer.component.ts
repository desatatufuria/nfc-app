import { Component } from '@angular/core';

@Component({
  selector: 'app-nfc-writer',
  template: `
    <div>
      <h1>NFC Writer</h1>
      <input [(ngModel)]="messageToWrite" placeholder="Enter message" />
      <button (click)="writeNFC()">Write NFC</button>
      <div *ngIf="writeSuccess !== null">
        <p>{{ writeSuccess ? 'Message written successfully!' : 'Failed to write message' }}</p>
      </div>
    </div>
  `,
})
export class NfcWriterComponent {
  messageToWrite: string = '';
  writeSuccess: boolean | null = null;

  async writeNFC() {
    if ('NDEFWriter' in window) {
      try {
        const ndef = new (window as any).NDEFWriter();
        await ndef.write({
          records: [
            {
              recordType: 'text',
              data: this.messageToWrite,
            },
          ],
        });
        this.writeSuccess = true;
      } catch (error) {
        console.error('Error writing NFC tag: ', error);
        this.writeSuccess = false;
      }
    } else {
      console.error('NFC writing not supported on this device');
      this.writeSuccess = false;
    }
  }
}
