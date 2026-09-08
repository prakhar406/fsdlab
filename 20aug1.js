//perform rvp operations using fs modules//

const fs = require('fs');

//create 
fs.writeFile('example.txt', 'Hello, i am  prakhar pandey.', (err) => {
    if (err) throw err;
    console.log('File created successfully.');

    //read
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
    });
});

//update

fs.appendFile('example.txt', '\nI am learning Node.js.', (err) => {
    if (err) throw err;
    console.log('File updated successfully.');

});

//delete
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully.');
});
