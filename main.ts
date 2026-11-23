// post-x-the-agent-builds-a-game-from-20261122-1709 — the entry is a post on X.
// This program (Node 22, standard library only) copies POST.json from the
// repository root into the grader's output directory, where the house reads
// the post's address from it. That is all it has to do.
//
// The post itself is the entry: a short video of an AI agent building a tiny
// browser game (game.html in this repo — STAR SNAKE, a glowing snake that
// eats stars, speeds up every 5 stars, and ends when it bites itself) from
// a single prompt, posted natively on X by @Tettxn with make.fun / @makefunai
// and the play code makefun-hawk-croquet-lake in its text, ending with
// make.fun's referral end card carrying referral code xrr5vp10. The house
// reads the post's views, likes, reposts, quotes and replies from X through
// FxTwitter; nothing this program writes about the post is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The entry is refused when POST.json names no post, so check the address
// is a real post URL before copying: a placeholder left in by mistake
// must fail loudly here instead of reaching the gate.
const postPath = join(botDir, "POST.json");
const post = JSON.parse(readFileSync(postPath, "utf8")) as { url?: unknown };
const url = typeof post.url === "string" ? post.url : "";
if (!/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[^/]+\/status\/\d+/.test(url)) {
  console.error(`POST.json does not name a post on X yet: ${url || "(empty)"}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(postPath, join(outDir, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
