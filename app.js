const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.download('./resume.pdf')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App is listening on PORT ${port}`))