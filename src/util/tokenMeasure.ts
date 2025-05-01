import { isWithinTokenLimit } from 'gpt-tokenizer';
import configs from './config.js';


export async function calculateTokens(text: string): Promise<boolean> {
    const isWithinLimit = isWithinTokenLimit(text, configs.openaiTokenLimit);
    
    return isWithinLimit;
}