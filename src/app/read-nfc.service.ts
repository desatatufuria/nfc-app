import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NfcService {

  constructor() { }

  async readNfc() {
    if ('NDEFReader' in window) {
      try {
        const ndef = new (window as any).NDEFReader();
        await ndef.scan();
        console.log("Escaneo NFC iniciado");

        ndef.addEventListener("reading", (event: NDEFReadingEvent) => {
          const { message, serialNumber } = event;
          console.log(`> Serial Number: ${serialNumber}`);
          for (const record of message.records) {
            console.log(`> Record type:  ${record.recordType}`);
            console.log(`> MIME type:    ${record.mediaType}`);
            console.log(`> Payload:      ${record.data}`);
          }
        });
      } catch (error) {
        console.log(`Error en el escaneo NFC: ${error}`);
      }
    } else {
      console.log("NFC no está soportado en este navegador.");
    }
  }
}
