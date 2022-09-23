const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Makramee</title>
</head>
<body>
    <h1>Makramee</h1>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    console.log(`Request received`);
    console.log(req.method); 
    console.log(req.headers); 
    console.log(req.url); 
    
    if (req.url == '/') {
                
        res.write(html);
        
        res.end();        
    } else {
        res.statusCode = 404;
        res.write('404 page');
        res.end();
    }
    
});

server.listen(3000);