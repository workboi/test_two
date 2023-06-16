# Abidi Investments Inc. Backend Developer Task

This task is designed to test your skills with Node.js streams, base64 encoding/decoding, and SHA256 hashing. 

## Task Overview

Your task is to fix the provided code in `src/streams` so that it passes the provided Jest test in `src/transform.test.ts`

`src/streams/transform.ts` exports a Node.js Transform stream. The stream is currently a passthrough stream that pushes chunks of data through without modifying them. You will need to modify this stream to perform specific tasks.

`src/streams/writer.ts` exports a Node.js Writable stream. The stream currently pushes data chunks through without any modification. You will need to modify this stream to write the processed data into a file.

`src/streams/transform.test.ts` provides a Jest test that generates a stream of 1000 base64-encoded JSON objects, pipes them through transform stream, pipes the output to writable stream, and finally checks if the data was written correctly into the file.

## Requirements

Your modified Transform stream in `src/transform.ts` should:

1. Base64-decode incoming data chunks.
2. Parse the decoded base64 string as JSON.
3. Compute a SHA256 hash of the original object (before any modifications).
4. Add the computed hash to the object under the property name `sha256`.

Your modified Writable stream in `src/writer.ts` should:

1. Write the transformed objects to a file named 'result.json'.

The final output file should contain an array of 1000 JSON objects, each with a `message` property and a `sha256` property. The `sha256` property should contain the SHA256 hash of the object with only the `message` property.

## Steps to Complete

1. Familiarize yourself with the initial code and test provided.
2. Install necessary Node.js dependencies, if not already installed: `npm install`
3. Write code in `src/streams/transform.ts` to modify the Transform stream as per the requirements.
4. Write code in `src/streams/writer.ts` to modify the Writable stream as per the requirements.
5. Run the Jest test using the command: `npm test`
6. If the test fails, modify your code and repeat steps 3-5 until the test passes.
7. After the test passes, ensure the 'result.json' file is created and has the correct format.
8. Make sure all Typescript and linting errors are fixed.
10. Open a PR and flag someone from the Sifir organization to review your work.

## Notes

- Do not modify the test file. You should only modify the stream files in `src/`
- You can use the Node.js built-in `crypto` module to compute the SHA256 hash.
- You may use any valid method to base64 decode the incoming data.

Good luck! We are looking forward to reviewing your solution.
