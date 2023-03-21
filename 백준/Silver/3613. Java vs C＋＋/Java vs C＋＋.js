const fs = require('fs');

function main() {
    let s = fs.readFileSync('/dev/stdin').toString().trim();

    if (
        /[^a-zA-Z_]/.test(s) 
        || /^[^a-z]/.test(s) 
        || /_$/.test(s) 
        || /_[^a-z]/.test(s) 
        || (/[A-Z]/.test(s) && /_/.test(s))
    ) {
        console.log('Error!');
    } else if (/[A-Z]/.test(s)) {
        console.log(s.replace(/[A-Z]/g, x => '_' + x.toLowerCase()));
    } else {
        console.log(s.replace(/_[a-z]/g, x => x[1].toUpperCase()));
    }
}

main();