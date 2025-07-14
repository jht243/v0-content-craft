import fs from "node:fs/promises";
import path from "node:path";
import { execSync } from "node:child_process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { generateText } from 'ai';
import { createVercel } from '@ai-sdk/vercel';

async function main() {
  const { route, prompt, apiKey } = await yargs(hideBin(process.argv))
    .option("route",  { type: "string", demandOption: true })
    .option("prompt", { type: "string", demandOption: true })
    .option("apiKey", { type: "string", demandOption: true, description: 'Your Vercel v0 API Key' })
    .argv;

  try {
    // According to official docs, create a Vercel provider instance with the API key.
    const vercel = createVercel({
      apiKey: apiKey,
    });

    console.log('Generating page with prompt:', prompt);

    const { text } = await generateText({
      model: vercel('v0-1.5-md'),
      prompt: prompt,
    });

    const code = (text.match(/```(?:tsx|jsx|typescript|javascript)?\s*([\s\S]+?)```/)?.[1] || text).trim();
    const file = path.join("app", route, "page.tsx");

    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, code);
    console.log(`✓ Successfully created ${file}`);

    // Try to commit and push if in a git repository
    try {
      execSync(`git add ${file}`, { stdio: 'inherit' });
      execSync(`git commit -m "auto: add ${route} page"`, { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      console.log("✓ Changes pushed — Vercel will redeploy");
    } catch (gitError: any) {
      console.warn('\nWarning: Git operations failed. This is expected if not in a git repository.');
    }
  } catch (error: any) {
    console.error('\nError generating page:');
    if (error.message.includes('Unauthorized')) {
        console.error('Authentication failed. This may be due to an incorrect API key or your Vercel plan not having API access.');
        console.error('Please verify your key and ensure you are on a Premium or Team plan as per the v0 API documentation.');
    } else {
        console.error(error.message || error);
    }
    process.exit(1);
  }
}

main().catch(console.error);
