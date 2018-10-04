const fs = require('fs');

var files_list_in_current_dir = fs.readdirSync('./');

console.log(files_list_in_current_dir);

fs.readdir('./', (err, files_array) => {
    if (err) console.log("ERROR : ", err);
    else console.log("Files array in current directory is : ", files_array);
});