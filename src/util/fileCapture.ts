import * as fs from 'fs';
import * as path from 'path';

/**
 * Reads a file and returns its content as a string.
 * @param filePath - The path to the file to be read.
 * @returns A promise that resolves with the file content as a string.
 */
export async function readFileAsText(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const absolutePath = path.resolve(filePath);

        fs.readFile(absolutePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading file: ${err.message}`);
            } else {
                resolve(data);
            }
        });
    });
}

// Example usage:
// readFileAsText('./example.txt')
//   .then(content => console.log(content))
//   .catch(err => console.error(err));

/**
 * Reads a JSON file and parses its content into an object.
 * @param filePath - The path to the JSON file to be read.
 * @returns A promise that resolves with the parsed JSON object.
 */
export async function readJsonFile<T>(filePath: string): Promise<T> {
    const fileContent = await readFileAsText(filePath);
    try {
        return JSON.parse(fileContent) as T;
    } catch (error: any) {
        throw new Error(`Error parsing JSON file: ${error.message}`);
    }
}

// Example usage:
// readJsonFile<{ name: string; age: number }>('./example.json')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));