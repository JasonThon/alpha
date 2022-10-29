import { Command } from "commander";

const appName = "LightFlus";


const program = new Command(appName);

program.command("lightflus")
  .description("lightflus client command line tool")
  .option("-n")