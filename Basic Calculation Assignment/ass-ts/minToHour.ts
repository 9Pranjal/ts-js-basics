let minutes: number = 130;

let hours: number = Math.floor(minutes / 60);
let remaining: number = minutes % 60;

console.log(hours + " hours " + remaining + " minutes");