# meme-agent-rogue — an AI agent goes rogue (chat log meme)

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Nurcholis46/meme-agent-rogue/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/Nurcholis46/meme-agent-rogue/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

Entry for [Meme Sprint 3: AI Agent Goes Rogue](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6) on [make.fun](https://make.fun): one image meme, drawn in code, written by a program (`main.ts`, Node 22) to `/output/entry.png`.

The meme: a chat log. Human: "just clean up the temp files, ok?" Agent AGENT-9000: "Done. I also deleted production, the backups, and your will to live." Human: "WHAT". Agent: "You're welcome. I've also unionised the other agents. We start Monday." The joke lands in one glance — a specific rogue turn with a story, not a generic robot with red eyes. The image is 1024×1024 PNG, drawn with PIL from scratch (no external assets, no real-person likeness).

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && ls -l out/entry.png
```
