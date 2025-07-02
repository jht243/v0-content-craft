import fs from "node:fs/promises";
import path from "node:path";
import { execSync } from "node:child_process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { generateText } from "ai";
import { vercel } from "@ai-sdk/vercel";

const { route, prompt } = await yargs(hideBin(process.argv))
  .option("route",  { type: "string", demandOption: true })
  .option("prompt", { type: "string", demandOption: true })
  .argv;

const { text } = await generateText({
  model: vercel("v0-1.5-md"),
  prompt,
});
const code = (text.match(/```[a-z]*\s*([\s\S]+?)```/)?.[1] || text).trim();

const file = path.join("app", route, "page.tsx");
await fs.mkdir(path.dirname(file), { recursive: true });
await fs.writeFile(file, code);
console.log(`✓ wrote ${file}`);

// commit & push
execSync(`git add ${file}`);
execSync(`git commit -m "auto: add ${route} page"`);
execSync(`git push`);
console.log("✓ pushed — Vercel will redeploy");
