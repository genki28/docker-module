import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

const port = 9090

app.listen(port, () => {
    console.log(`🚀Runnning http://localhost:9090`)
})