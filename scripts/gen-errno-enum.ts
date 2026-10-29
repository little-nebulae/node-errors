import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { x } from "tinyexec";

function parseLine(line: string) {
  const [name, number, ...rest] = line.split(" ");
  const message = rest.join(" ");
  return { name: name as string, number: Number(number), message };
}

const errnoEnum: Record<
  string,
  { name: string; number: number; message: string }
> = {};

const result = x("errno", ["--list"]);
for await (const line of result) {
  const parsedLine = parseLine(line.trim());
  errnoEnum[parsedLine.name] = parsedLine;
}

await writeFile(
  join(import.meta.dirname, "errno-enum.json"),
  JSON.stringify(errnoEnum),
);
