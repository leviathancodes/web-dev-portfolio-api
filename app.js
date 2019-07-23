const express = require('express')
const app = express()

app.get('/', (req, res) => res.download('./resume.pdf'))

const port = process.env.PORT || 3000
app.listen(3000, () => console.log(`App is listening on PORT ${port}`))