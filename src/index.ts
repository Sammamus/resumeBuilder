import configs from './util/config.js';
import { calculateTokens } from './util/tokenMeasure.js';
import { readFileAsText } from './util/fileCapture.js';
import OpenAI from 'openai';
import readline from 'readline';
import * as fs from 'fs';

try {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const fileContent = await readFileAsText(configs.skillsFilePath);
    if (!fileContent) {
        throw new Error("File content is empty or could not be read.");
    }

    const isWithinLimit = await calculateTokens(fileContent);
    if (!isWithinLimit) {
        throw new Error(`The file content exceeds the token limit of ${configs.openaiTokenLimit} tokens.`);
    }

    const client = new OpenAI({
        apiKey: configs.openaiKey
    });
    if (!client) {
        throw new Error("Failed to create OpenAI client.");
    }


    const jobTitle = await new Promise<string>((resolve) => {
        rl.question('Please enter the job title you would like a resume written for: ', (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
    
    const prompt = [{
        role: "assistant",
        content: `Create a resume for ${jobTitle} role ephasizing on the strengths and skills from following job history: ${fileContent}`, 
    }]
    
    const response = await client.responses.create({
        model: configs.openaiModel,
        input: prompt,
    });
    if (!response || !response.output_text) {
        throw new Error("Failed to get a valid response from OpenAI.");
    }

    const strippedResponse = await response.output_text.replace(/^Response:\s*/, '');
    fs.writeFile(configs.outputFilePath, strippedResponse, (err) => {
        if (err) {
            throw new Error(`Error writing to file: ${err.message}`);
        } else {
            console.log(`Resume written to ${configs.outputFilePath}`);
        }
    });

    
    // console.log(" Response: ", response.output_text);


}
catch (error) {
    console.error("Error: ", error);
}