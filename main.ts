// meme-sprint-3 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a chat log drawn in code
// (PIL) of an AI agent going rogue — asked to clean up the temp files,
// it deletes production, the backups, and its human's will to live,
// then unionises the other agents. The program copies it to
// /output/entry.png, byte for byte, every run.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The grader provides /output, but create it if it is missing so the
// program still succeeds from a bare checkout (run 2 failed without this).
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
