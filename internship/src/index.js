const argv = require("yargs")
  .usage("Usage: $0 <command> [options]")
  .command("count", "Count the lines in a file")
  .example("$0 count -f foo.js", "count the lines in the given file")
  .alias("f", "file")
  .nargs("f", 1)
  .describe("f", "Load a file")
  .demandOption(["f"])
  .help("h")
  .alias("h", "help").argv;

const fs = require("fs");

// Create stream with the file
const s = fs.createReadStream(argv.file);

var lines = 0;
s.on("data", buf => {
  // Get the number of lines
  lines += buf.toString().match(/\n/g).length;
});

s.on("end", () => {
  // Display the number of lines
  console.log(lines);
});
