const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
const start = () => {
  process.stdout.write("type a NUMBER for timer\n");
};
start();
stdin.on("data", key => {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }

  if (key === "b") {
    process.stdout.write("\x07");
  } else {
    let output = parseInt(key);
    if (isNaN(output)) {
      start();
    } else {
      process.stdout.write(`setting timer for ${output} seconds...\n`);
      setTimeout(() => {
        process.stdout.write("\x07");
        start();
      }, parseInt(output) * 1000);
    }
  }
});
