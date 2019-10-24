const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail')
const cors = require('cors')


sgMail.setApiKey(process.env.LHUDDLESTO_SENDGRID_KEY)
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.download('./001_Lance_Huddleston_II_Resume.pdf')
})

app.post('/email', (req, res) => {

   console.log(req.body)
    try {
        if (!req.body.work || req.body.work === "null") {
            return res.send("Your request could not be completed.  Please choose a valid work type.")
        }
        const msg = {
            to: 'info@lhuddlesto.com',
            from: req.body.email,
            subject: `${req.body.fname} ${req.body.lname} - ${req.body.work}`,
            text: req.body.message
        }
        sgMail.send(msg);
        return res.send("Thank you!  Your email has been sent.")

    } catch (e) {
        console.log("Whoops")
        res.send(e)
    }

})

const port = process.env.PORT || 9000
app.listen(port, () => console.log(`App is listening on PORT ${port}`))