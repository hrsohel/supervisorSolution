// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import conn from '../../../controllers/db'
const jwt = require('jsonwebtoken')
import nc from "next-connect";
import protect from "../../../middlewares/auth";
import companyProtect from '../../../middlewares/companyAuth';
const nodemailer = require('nodemailer')

export const config = {
  api: {
    bodyParser: true,
  },
}

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    // res.status(500).end("Something broke!");
    next()
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
.use(protect)
.use(companyProtect)
.get((req, res) => {
  res.json({token: req.token, companyToken: req.companyToken})
})

.post(async(req, res) => {
    const {id, name, emails, course} = req.body
    const emailValues = Object.values(emails)
    const sql1 = `SELECT * FROM companymembers WHERE companyId=${id} AND paid=0`
    const sql = `INSERT INTO companymembers (emails, companyId, name, courses)
    VALUES('${JSON.stringify(Object.values(emails))}', "${id}", "${name}", "[${course}]");
    `
    const transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        // user: "hrsohel679@gmail.com",
        // pass: "evadngtxsmijleti"
        user: "supervisorsolutions50@gmail.com",
        pass: "adenefasghcioxle"
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    const mailOptions = {
      from: "hrsohel679@gmail.com",
      // to: "mdarmanya.h@gmail.com, hrsohel679@gmail.com",
      to: `${emailValues.map(email => email)}`,
      subject: "Email Test",
      html: `<div>
        <p>Hello, this is from Supervision Company. You have been enrolled
          ${course.length} courses by Contact@supervisorsolutions.com.
        </p>
        <a href="https://supervisorsolutions.com/user/profile" target="_blank">Click Here</a>
      </div>`
    } 
    conn.query(sql1, (err, result) => {
      if(!err && result.length > 0) return res.json({status: 401, message: "You have courses to be paid. Please pay the courses"})
      else {
        conn.query(sql, (err, result) => {
          if(!err) {
            transporter.sendMail(mailOptions, (err, result) => {
              if(!err) console.log(`Email sent ${result.response}`)
              else console.log(err)
            })
            return res.json({status: 201, message: "Data Inserted"})
          } 
          else console.log(err)
        })
      }
    })
})

export default handler
