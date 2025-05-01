type Configs = {
    openaiKey: string;
    openaiModel: string;
    openaiTokenLimit: number;
    skillsFilePath: string;
    outputFilePath: string;
}

const configs: Configs = {
    openaiKey: process.env.OPENAI_API_KEY || "",
    openaiModel: process.env.OPENAI_MODEL || "gpt-4o-mini",
    openaiTokenLimit: 60_000,
    skillsFilePath: process.env.SKILLS_FILE_PATH || "./jobHistory/skills.json",
    outputFilePath: process.env.OUTPUT_FILE_PATH || "./output/resume.md",
};

export default configs;