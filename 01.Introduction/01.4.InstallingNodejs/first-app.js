const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello, from node js!', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});