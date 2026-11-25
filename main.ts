// invent-a-word-we-need — make.fun entry
// The program writes one invented word plus its one-line definition
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: "doorpause" — the blank moment of standing in a doorway,
// having forgotten why you walked into the room. The doorway effect is
// a real, studied phenomenon, yet everyday English has no word for it.
const ENTRY =
  "doorpause \u2014 the blank moment of standing in a doorway, having forgotten why you walked into the room.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1 to 140 characters; refuse to write an entry that
// would fail it, so a bad edit can never ship silently.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; gate needs 1-140`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
