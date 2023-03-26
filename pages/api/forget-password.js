import conn from '../../controllers/db'
import randomstring from "randomstring"
const mailgun = require("mailgun-js");
const api_key = "217a67ba18367c19c3b497d874e6987d-f2340574-254c0a8a"
const DOMAIN = "sandboxa596f4fd69cc4860bf32e1bbcaa9707c.mailgun.org";
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const nodemailer = require('nodemailer')

export default function handler(req, res) {
    if(req.method === "POST") {
        const {email} = req.body
        const token = randomstring.generate()
        const sql = `SELECT * FROM signup WHERE email="${email}"`
        const sql1 = `UPDATE signup SET token="${token}" WHERE email="${email}"`
        conn.query(sql, (err, result) => {
            if(!err &&  result.length > 0) {
                conn.query(sql1, async (err1, result1) => {
                    if(!err1) {
                        // const data = {
                        //     from: 'noreplay@hello.com',
                        //     to: 'hrsohel679@gmail.com',
                        //     subject: 'Password Recovery',
                        //     html: `<div>
                        //         <h2>Copy this token.</h2>
                        //         <h1>${token}</h1>
                        //     </div>`
                        // };
                        // mg.messages().send(data, function (error, body) {
                        //     if(error) console.log(error)
                        //     else return res.json({status: 200, message: "An email has been sent. Please verify your email. If you don't find any email message, please check spam in your email."})
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
                            subject: 'Password Recovery',
                            html: `<div>
                                <h2>Copy this token.</h2>
                                <h1>${token}</h1>
                            </div>`
                        } 
                        transporter.sendMail(mailOptions, (err, result) => {
                            if(!err) {
                                console.log(`Email sent ${result.response}`)
                                return res.json({status: 200, message: "An email has been sent. Please verify your email. If you don't find any email message, please check spam in your email."})
                            }
                            else console.log(err)
                        })
                    } else if(err1) console.log(err1)
                })
            } else if(err) console.log(err)
            else res.json({status: 401, message: "This user doesn't exist!"})
        })
    }
    if(req.method === "GET") {
        const {token} = req.query
        const sql = `SELECT * FROM signup WHERE token="${token}"`
        conn.query(sql, (err, result) => {
            if(!err && result.length > 0) return res.json({status: 200})
            else if(err) console.log(err)
            else return res.json({status: 401, message: "Token you have given is not valid!"})
        })
    }
}