const express = require('express')
const app = express()
const port = 3010 // Port listening

app.get('/', (req, res) =>{
    res.write('<h1>Good afternoon NodeJS!</h1>')
    res.end();
});

app.listen(port, () => {
    console.log('listening on port', port)
});