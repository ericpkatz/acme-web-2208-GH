const express = require('express');

const app = express();


app.get('/', (req, res)=> {
  res.send(`
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
        <p>
          Prof always wears white!
        </p>
      </body>
    </html>
  `);
});

app.get('/bobby', (req, res)=> {
  res.send(`
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
        <p>
          Bobby <em>almost</em> bowled a perfect game. He does a little bit of bowling!
        </p>
      </body>
    </html>
  `);
});

app.get('/maxie', (req, res)=> {
  res.send(`
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
        <p>
          Maxie is undefeated in her bowling competitions. Perfection!!
        </p>
      </body>
    </html>
  `);
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
