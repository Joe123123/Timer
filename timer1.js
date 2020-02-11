//Pair coded with Joe Wang

let timerArray = process.argv.slice(2);
const timer = time => {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
};
for (const time of timerArray) {
  if (time >= 0) {
    timer(time);
  }
}
