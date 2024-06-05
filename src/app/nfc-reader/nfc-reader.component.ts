import { Component, OnInit } from '@angular/core';
import { NfcService } from '../read-nfc.service';

@Component({
  selector: 'app-nfc',
  template: `
    <button (click)="startNfcScan()">Iniciar Escaneo NFC</button>
  `
})
export class NfcComponent implements OnInit {

  constructor(private nfcService: NfcService) { }

  ngOnInit(): void {
  }

  startNfcScan() {
    this.nfcService.readNfc();
  }
}
