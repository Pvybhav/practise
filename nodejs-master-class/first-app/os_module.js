var os = require('os');

console.log(os.freemem()); // Returns free memory in bytes
console.log("<------------------------------------------------------->");
console.log(os.arch()); // Returns architecture of the os (x64)
console.log("<------------------------------------------------------->");
console.log(os.constants); // Returns an object containing commonly used operating system specific constants for error codes, process signals, and so on
console.log("<------------------------------------------------------->");
console.log(os.cpus()); // Returns an array of objects containing information about each logical CPU core
console.log("<------------------------------------------------------->");
console.log(os.hostname()); // Returns hostname (L-185015569)
console.log("<------------------------------------------------------->");
console.log(os.homedir()); // Returns home directory(C:\Users\vy323647)
console.log("<------------------------------------------------------->");
console.log(os.platform()); // Returns platform details(win32)
console.log("<------------------------------------------------------->");
console.log(os.release()); // Returns the relese of os (10.0.14393)
console.log("<------------------------------------------------------->");
console.log(os.tmpdir()); // Returns temporary folder path (C:\Users\vy323647\AppData\Local\Temp)
console.log("<------------------------------------------------------->");
console.log(os.freemem()); // Returns free memory in bytes
console.log("<------------------------------------------------------->");
console.log(os.type()); // Returns os type (Windows_NT)
console.log("<------------------------------------------------------->");
console.log(os.uptime()); // Returns uptime of the operating system in seconds
console.log("<------------------------------------------------------->");
console.log(os.userInfo());
// the userInfo() returns object as below
// {
//     uid: -1,
//     gid: -1,
//     username: 'VY323647',
//     homedir: 'C:\\Users\\vy323647',
//     shell: null
// }
console.log(`user name is ${os.userInfo().username}`); // Returns username from userInfo() (VY323647)
// ` some string ${Arguments}` is used to print the both string and js argument without using concatenation operator