// Two Days of Excuses — one-line entry writer.
// Node 22, stdlib only, no network. Deterministic: writes the same line every run.
import { writeFileSync, mkdirSync } from "node:fs";

const ENTRY =
  "I calculated a 99.9% chance of finishing on time, then spent the entire deadline recalculating it — the final result was 99.9% certain, delivered three days late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
