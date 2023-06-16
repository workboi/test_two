import { Readable } from "stream";
import { DataTransformer, TransformData } from "./transform";
import { DataWriter } from "./writer";
import * as crypto from "crypto";
import * as fs from "fs";

function* generateRandomObjects() {
	for (let i = 0; i < 1000; i++) {
		yield Buffer.from(
			JSON.stringify({ message: `Random Message ${Math.random()}` })
		).toString("base64");
	}
}

describe("Transform Stream Test", () => {
	it("should base64 decode the data, add a SHA256 hash to the object and write to a file", (done) => {
		const readStream = Readable.from(generateRandomObjects());
		const myTransform = new DataTransformer();
		const writeStream = new DataWriter("result.json", {
			objectMode: true,
		});

		readStream
			.pipe(myTransform)
			.pipe(writeStream)
			.on("finish", () => {
				fs.readFile("result.json", (err, data) => {
					if (err) throw err;
					const result = JSON.parse(data.toString());

					expect(result.length).toEqual(1000);

					result.forEach((item: TransformData) => {
						const rawData = { message: item.message };
						const hash = crypto.createHash("sha256");
						hash.update(JSON.stringify(rawData));
						const sha256Hash = hash.digest("hex");

						expect(item).toEqual({ ...rawData, sha256: sha256Hash });
					});

					done();
				});
			});
	});
});
