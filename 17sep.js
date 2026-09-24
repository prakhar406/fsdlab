const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/"){
 res.end('home page');  


    }

     if (req.url === '/about') {
        res.end('about page');
    }

    else if (req.url === '/students') {
        res.end('students page');
    }
});
server.listen(5407, () => {
    console.log('Server is running on port 5407');
}
);
