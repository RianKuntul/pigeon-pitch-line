// Pigeon Pitch, One Line — entry v2
// Writes one original one-line elevator pitch, from a city pigeon to
// investors for its startup, to entry.txt.
// Deterministic: fixed string, no network, no randomness.
// Revised pitch: sharper investor hook ("seed funding — literally, seed"),
// a two-sided business model (pigeons pay in crumbs, tourists pay to feed
// them), and the twist landing on the last word — a hawk as eviction notice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "I'm raising seed funding — literally, seed — for StatueBnB: pigeons pay rent in crumbs, tourists pay to feed us, and our only eviction notice is a hawk.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the scorer counts the file's exact text.
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
