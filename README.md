# resumeBuilder
ResumeBuilder using openai and typsecript

## Scope of the Project
The `resumeBuilder` project aims to provide a streamlined and efficient way to generate professional resumes using OpenAI's natural language processing capabilities and TypeScript for robust type safety and maintainability. The project focuses on creating an enriched and professinally written resume by taking user provided data and piping it through an AI prompt. The output will comeback as a markdown file for your review and editing before running the next piece to convert to a PDF.

## Requirements of the Project
To successfully run and develop the `resumeBuilder` project, the following requirements must be met:
- **Node.js**: Version 22 or higher.
- **TypeScript**: Installed globally or as a project dependency.
- **OpenAI API Key**: Required for AI-powered features.
- **Package Manager**: npm or yarn for dependency management.
- **Git**: For version control and collaboration.

## Setup of the Project
To set up the project, follow these steps:
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/resumeBuilder.git
    ```
2. Navigate to the project directory:
    ```bash
    cd resumeBuilder
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create an `.env` file in the root directory and add your OpenAI API key:
    ```
    OPENAI_API_KEY=your-api-key-here
    ```
5. Export the environment variables (if required by your system):
    ```bash
    export OPENAI_API_KEY=your-api-key-here
    ```
6. Navigate to `jobHistory/skills.json` and make the necessary edits with your own information.

## Usage of the Project
To start the project, use the following commands:
1. Compile the TypeScript code:
    ```bash
    npm run build
    ```
2. Run the application:
    ```bash
    npm start
    ```
3. Follow the prompt to add in the Job Title that you wish to have a resume written for.
4. Review the `resume.md` in the output folder and make edits as needed or rerun step 2 if you feel the job title was inaccurate.
5. Once all edits are complete on `resume.md`, run the following:
    ```bash
    node run finalize
    ```
6. Distribute the resume as to see fit.