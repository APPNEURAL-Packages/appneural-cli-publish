import { Command } from "commander";
import { registerPublishCommands } from "./commands/publish.js";

export default function register(program: Command): void {
  registerPublishCommands(program);
}
