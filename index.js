const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
    let a =10;
    let b = 20;
    let c = a * b;
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})