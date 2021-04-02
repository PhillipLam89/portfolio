require('dotenv').config()

const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5000

//MiddleWare

app.use(express.static('public'))
app.use(express.json())


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res) => {
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
          user: process.env.ROUTING_EMAIL,
          pass: process.env.EMAIL_PASSWORD

    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'vanlamvan89@gmail.com',
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res.send('error')
    }else {
      console.log('sent')
      res.send('success!')
    }
  })
})


app.listen(5000, () => {
    console.log(`server running on dport ${PORT}`)
})
