// src/web-nfc.d.ts
interface NDEFReadingEvent extends Event {
    message: NDEFMessage;
    serialNumber: string;
  }
  
  interface NDEFMessage {
    records: NDEFRecord[];
  }
  
  interface NDEFRecord {
    recordType: string;
    mediaType?: string;
    id?: string;
    data?: ArrayBuffer;
  }
  
  declare class NDEFReader {
    constructor();
    scan(): Promise<void>;
    write(data: string | NDEFMessageInit, options?: NDEFWriteOptions): Promise<void>;
    onreading: ((this: NDEFReader, ev: NDEFReadingEvent) => any) | null;
    onreadingerror: ((this: NDEFReader, ev: Event) => any) | null;
    addEventListener(type: 'reading', listener: (this: NDEFReader, ev: NDEFReadingEvent) => any): void;
    addEventListener(type: 'readingerror', listener: (this: NDEFReader, ev: Event) => any): void;
  }
  
  interface NDEFWriteOptions {
    overwrite?: boolean;
    signal?: AbortSignal;
  }
  
  interface NDEFMessageInit {
    records: NDEFRecordInit[];
  }
  
  interface NDEFRecordInit {
    recordType: string;
    mediaType?: string;
    id?: string;
    data?: string | BufferSource;
  }
  