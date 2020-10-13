import fs from "fs";
import yargs from "yargs";
import { compileCode } from "./lib";

// const input = fs.readFileSync("./input.lux");
//
// const code = compileCode(input.toString());
// console.log(code);
//
// console.log(eval(code));

function main() {
  const argv = yargs(process.argv.slice(2))
    .options({
      build: { type: "string", alias: "b", describe: "Build project in path" },
      run: { type: "string", alias: "r", describe: "Run project in path" },
      test: {
        describe: "Run tests",
      },
    })
    .help().argv;

  if (argv.build) {
    const input = fs.readFileSync(argv.build);
    const code = compileCode(input.toString());
    console.log(code);
    return;
  }

  if (argv.run) {
    const input = fs.readFileSync(argv.run);
    const code = compileCode(input.toString());
    console.log(code);
    console.log("=== RUNNING ===");
    console.log(eval(code));
    return;
  }

  if (argv.test) {
    return;
  }
}

main();
