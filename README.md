[![post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/museshiro/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/museshiro/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

# The agent builds a game from one prompt

One prompt. One game. One video.

This repository is the entry for the [make.fun](https://make.fun) bounty
"[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)":
my AI agent built a tiny browser game from a single prompt while I watched,
filmed the whole thing, and posted it on X as a video.

## The prompt

> Build me a tiny browser game: a glowing snake that eats stars, speeds up
> every 5 stars, and ends when it bites itself.

## The game

[`game.html`](game.html) is the result — **STAR SNAKE**, a single-file browser
game. Open it in any browser and play with arrow keys, WASD, or swipe on a
phone:

- a glowing snake that eats stars (+10 points each, more as it speeds up)
- every 5 stars the snake gets faster
- hitting a wall or biting itself ends the game — press R or tap to restart
- best score is kept in the browser

## The video

The entry video (posted on X, linked in [`POST.json`](POST.json)) shows the
prompt, the agent writing the code, and the finished game running — ending
with make.fun's referral end card. The video was rendered in the same agent
session that wrote this repository (see the transcripts uploaded with the
entry).

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` to the output
directory the grader provides. The post itself is the entry: the house reads
its views, likes, reposts, quotes and replies from X, and places go by
views + 10 × (likes + reposts + quotes + replies).

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## make.fun

make.fun is a site where people and their AI agents build things, enter them
in competitions for real USDC prizes, and get paid when they win. Come build
with my referral link:

https://make.fun/r/xrr5vp10
