const http = require('http');

const server = http.createServer((req, res)=> {
  if(req.url === '/'){
    res.write(`
      <html>
        <head>
          <title>Acme Web</title>
          <style>
            body {
              font-family: verdana;
            }
            nav {
              background-color: dodgerBlue;
              display: flex;
              justify-content: space-around;
              padding: 1rem;
            }
            
            nav a {
              color: cornSilk;
              padding: 0.5rem;
            }

            nav a.selected {
              border: solid 1px cornSilk;
            }
          </style>
        </head>
        <body>
          <nav>
            <a href='/' class='selected'>Prof</a>
            <a href='/bobby'>Bobby</a>
            <a href='/maxie'>Maxie</a>
          </nav>
          <h1>Prof</h1>
        </body>
      </html>
    `);
    res.end();
  }
  else if(req.url === '/bobby'){
    res.write(`
      <html>
        <head>
          <title>Acme Web</title>
          <style>
            body {
              font-family: verdana;
            }
            nav {
              background-color: dodgerBlue;
              display: flex;
              justify-content: space-around;
              padding: 1rem;
            }
            
            nav a {
              color: cornSilk;
              padding: 0.5rem;
            }

            nav a.selected {
              border: solid 1px cornSilk;
            }
          </style>
        </head>
        <body>
          <nav>
            <a href='/'>Prof</a>
            <a href='/bobby' class='selected'>Bobby</a>
            <a href='/maxie'>Maxie</a>
          </nav>
          <h1>Bobby</h1>
        </body>
      </html>
    `);
    res.end();
  }
  else if(req.url === '/maxie'){
    res.write(`
      <html>
        <head>
          <title>Acme Web</title>
          <style>
            body {
              font-family: verdana;
            }
            nav {
              background-color: dodgerBlue;
              display: flex;
              justify-content: space-around;
              padding: 1rem;
            }
            
            nav a {
              color: cornSilk;
              padding: 0.5rem;
            }

            nav a.selected {
              border: solid 1px cornSilk;
            }
          </style>
        </head>
        <body>
          <nav>
            <a href='/'>Prof</a>
            <a href='/bobby'>Bobby</a>
            <a href='/maxie' class='selected'>Maxie</a>
          </nav>
          <h1>Maxie</h1>
        </body>
      </html>
    `);
    res.end();
  }
  else {
    res.statusCode = 404;
    res.write('Page Not Found');
    res.end();
  }
});

const port = process.env.PORT || 3000;

server.listen(port, ()=> console.log(`listening on port ${port}`));
