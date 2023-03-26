import conn from "../../../controllers/db"
const bcrypt = require("bcryptjs");
const mailgun = require("mailgun-js");
const api_key = "19771b73f49874071d5a0d322d2111d5-bdb2c8b4-03bfec35"
const DOMAIN = "sandboxf1f60097638b4276b89fc860a7a0ba2d.mailgun.org";
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
import jwt from 'jsonwebtoken'
const nodemailer = require('nodemailer')

export default async function handler(req, res) {
    if(req.method === "GET") res.json({message: "Hello"})
    if(req.method === 'POST') {
        const {email} = req.body
        const token = jwt.sign({token: req.body}, process.env.SECRET_KEY, {expiresIn: "10m"})
        const sql = `SELECT * FROM signup WHERE email="${email}"`
        conn.query(sql, async (err, result) => {
            if(!err && result.length > 0) return res.json({message: "This user already exists!"})
            else if(err) console.log(err)
            else {
                const transporter = await nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: "supervisorsolutions50@gmail.com",
                        pass: "adenefasghcioxle"
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                    })
                const mailOptions = {
                    from: "contact@supervisor.com",
                    // to: "mdarmanya.h@gmail.com, hrsohel679@gmail.com",
                    to: email,
                    subject: "Email Verification",
                    html: `<div>
                            <h2>Please verify your account</h2>
                           <a href="https://supervisorsolutions.com/${token}" class="px-2 py-1 bg-green-600 text-white text-center rounded-md" target="_blank">
                                Verify account
                            </a>
                       </div>`
                }
                transporter.sendMail(mailOptions, (err, result) => {
                    if(!err) {
                        console.log(`Email sent ${result.response}`)
                        return res.json({status: 200, message: "An email has been sent. Please verify your email. If you don't find any email message, please check spam in your email."})
                    } 
                    else console.log(err)
                })
                //     const data = {
                //         from: 'noreplay@hello.com',
                //         to: `${email}`,
                //         subject: 'Email Verification',
                //         html: `<div>
                //             <h2>Please verify your account</h2>
                //             <a href="https://supervisorsolutions.com/${token}" class="px-2 py-1 bg-green-600 text-white text-center rounded-md" target="_blank">
                //                 Verify account
                //             </a>
                //         </div>`
                //     };
                // mg.messages().send(data, function (error, body) {
                //     if(error) console.log(error)
                //     else return res.json({status: 200, message: "An email has been sent. Please verify your email. If you don't find any email message, please check spam in your email."})
                // });
            }
        })
    }
}