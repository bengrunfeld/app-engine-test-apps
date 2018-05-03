import express from 'express'

const app = express()

import style from './css/style.css'

app.get('/', (req, res) => {
    res.status(200).send('Hello world').end()
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
