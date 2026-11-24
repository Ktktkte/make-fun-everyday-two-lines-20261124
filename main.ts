import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "A queue is a human train: everyone stands bumper to bumper, waiting for the person at the front to move before the whole line can shuffle forward.",
  "It maps the waiting and the one-at-a-time shuffle, but leaves out that a real train has an engine pulling it, while a queue has nobody in charge at all.",
];

const text = lines.join("\n") + "\n";

if (text.length < 1 || text.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${text.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
