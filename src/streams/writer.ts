import { Writable } from "stream";

export interface TransformData {
	message: string;
	sha256?: string;
}
class DataWriter extends Writable {
	filePath: string;

	constructor(filePath: string, options?: any) {
		super(options);
		this.filePath = filePath;
	}

	_write(
		chunk: any,
		encoding: BufferEncoding,
		callback: (error?: Error | null) => void
	): void {
		// You will need to handle writing data to a file here

		callback();
	}
}

export { DataWriter };
