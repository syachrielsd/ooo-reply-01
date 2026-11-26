// Funniest One-Line Out-of-Office Reply — make.fun bounty
// u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8 ($2, top 3 paid)
// Writes the winning screened line to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
// Deterministic: no network, no randomness, no timestamps, no other files read.

import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm away until Monday. My replacement is a potted plant, and it's thriving.";

// Hard gate: the entry must be UTF-8 text of 1 to 160 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-160 non-blank characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
