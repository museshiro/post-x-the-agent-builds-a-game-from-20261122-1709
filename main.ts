// main.ts — entrypoint for post-x-the-agent-builds-a-game-from-20261122-1709.
// Its only job: copy POST.json (the X post's address) from beside this file
// into the grader's output directory, refusing loudly instead of handing
// the gate a missing or malformed file. Node 22, standard library only.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const source = join(here, 'POST.json');

if (!existsSync(source)) {
  throw new Error(`POST.json not found next to main.ts: ${source}`);
}

const post = JSON.parse(readFileSync(source, 'utf8'));
if (typeof post !== 'object' || post === null || typeof post.url !== 'string') {
  throw new Error('POST.json must be a JSON object with a string "url"');
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'POST.json'));
