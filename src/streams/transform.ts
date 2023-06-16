import { Transform, TransformCallback } from "stream";

export interface TransformData {
  message: string;
  sha256?: string;
}

class DataTransformer extends Transform {
  constructor() {
    super({ readableObjectMode: true, writableObjectMode: true });
  }

  _transform(
    chunk: any,
    encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    let data: TransformData;

    // You will need to handle the base64 decoding, JSON parsing,
    // and SHA256 hashing here

    this.push(data);
    callback();
  }
}

export { DataTransformer  };
