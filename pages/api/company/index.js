import conn from "../../../controllers/db"
const bcrypt = require("bcryptjs");
const mailgun = require("mailgun-js");
const api_key = "19771b73f49874071d5a0d322d2111d5-bdb2c8b4-03bfec35"
const DOMAIN = "sandboxf1f60097638b4276b89fc860a7a0ba2d.mailgun.org";
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
import jwt from 'jsonwebtoken'
const nodemailer = require('nodemailer')

export default async function handler(req, res) {
    if(req.method === "GET") {
        const sql = 'SELECT * FROM company'
        conn.query(sql, (err, result) => {
            if(!err) return res.json({status: 200, message: result})
            else console.log(err)
        })
    }
    if(req.method === 'POST') {
        const {email} = req.body
        const token = jwt.sign({token: req.body}, process.env.SECRET_KEY, {expiresIn: "10m"})
        const sql = `SELECT * FROM company WHERE email="${email}"`
        conn.query(sql, async (err, result) => {
            if(!err && result.length > 0) return res.json({status: 401, message: "This user already exists!"})
            else if(err) console.log(err)
            else {
                //     const data = {
                //         from: 'noreplay@hello.com',
                //         to: email,
                //         subject: 'Email Verification',
                //         html: `<div>
                //             <h2>Please verify your account</h2>
                //             <a href="https://supervisorsolutions.com/token/${token}" class="px-2 py-1 bg-green-600 text-white text-center rounded-md" target="_blank">
                //                 Verify account
                //             </a>
                //         </div>`
                //     };
                // mg.messages().send(data, function (error, body) {
                //     if(error) console.log(error)
                //     else return res.json({status: 200, message: "An email has been sent. Please verify your email. If you didn't find email message, please check spam in your email."})
                // });
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
                        to: email,
                        subject: 'Email Verification',
                        html: `<div>
                            <h2>Please verify your account</h2>
                            <a href="https://supervisorsolutions.com/token/${token}" class="px-2 py-1 bg-green-600 text-white text-center rounded-md" target="_blank">
                                Verify account
                            </a>
                        </div>`
                    }
                    transporter.sendMail(mailOptions, (err, result) => {
                        if(!err) {
                            console.log(`Email sent ${result.response}`)
                            return res.json({status: 200, message: "An email has been sent. Please verify your email. If you didn't find email message, please check spam in your email."})
                        } 
                        else console.log(err)
                    })
            }
                                
        })
    }
}


// import conn from '../../../controllers/db'
// const jwt = require('jsonwebtoken')
// import nc from "next-connect";
// import protect from "../../../middlewares/auth";
// import bcrypt from 'bcryptjs'

// export const config = {
//   api: {
//     bodyParser: true,
//   },
// }

// const handler = nc({
//   onError: (err, req, res, next) => {
//     console.error(err.stack);
//     // res.status(500).end("Something broke!");
//     next()
//   },
//   onNoMatch: (req, res) => {
//     res.status(404).end("Page is not found");
//   },
// })
// .use(protect)

// .post(async(req, res) => {
//     const {name, address, email, password} = req.body
//     const companyId = Math.floor((Math.random() + 1) * 10e6)
//     const hashedPassword = await bcrypt.hash(password, 10)
//     const sql = `INSERT INTO company(name, address, email, companyId, password)
//     VALUES("${name}", "${address}", "${email}", "${companyId}", "${hashedPassword}")
//     `
//     const sql1 = `SELECT * FROM company WHERE email="${email}"`
//     conn.query(sql1, (err, result) => {
//         if(!err && result.length > 0) return res.json({status: 401, message: "This user already exist"})
//         else {
//             conn.query(sql, (err, result) => {
//                 if(!err) return res.json({status: 200, message: 'User addded'})
//                 else console.log(err)
//             })
//         }
//     })
// })

// .get((req, res) => {
//     const sql = 'SELECT * FROM company'
//     conn.query(sql, (err, result) => {
//         if(!err) return res.json({status: 200, message: result})
//         else console.log(err)
//     })
// })

// export default handler