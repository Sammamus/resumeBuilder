import configs from './config.js';
import * as fs from 'fs';
import { mdToPdf } from 'md-to-pdf';

(async () => {
    // Convert the markdown content to PDF
    const pdf = await mdToPdf({ path: configs.outputFilePath }).catch(console.error);
    if (pdf && pdf.content) {
        const pdfFilePath = configs.outputFilePath.replace(/\.md$/, '.pdf');
        fs.writeFileSync(pdfFilePath, pdf.content);
        console.log(`PDF generated successfully at ${pdfFilePath}`);
    }
})().catch((error: any) => {
    throw new Error(`Error generating PDF: ${error.message}`);
});