import { GroundControlClient } from "@groundcontrolsh/groundcontrol";
import fs from "fs/promises"
import path from "path";

export async function GET() {
  const client = new GroundControlClient({
    projectId: "P0J3GPCGANJSV5MV",
    apiKey: "gcp_6N47wSF9uNLgSFG47R0qMtbCQGCJx22Xmb6e",
  })

  
  

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
