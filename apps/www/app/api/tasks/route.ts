import fs from "fs/promises";
import path from "path";

export async function GET() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/examples/tasks/data/tasks.json"), "utf-8"
  )

  const json = JSON.parse(data)
  const lines = json.map((task: any) => [
    task.id,
    task.title,
    task.status,
    task.label,
    task.priority
  ].join(","))

  return new Response(lines.join("\n"))
}
