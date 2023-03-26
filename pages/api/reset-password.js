import conn from "../../controllers/db"
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
    if(req.method === "POST") {
        const {npassword, email} = req.body
        const hashedPassword = await bcrypt.hash(npassword, 10)
        const sql = `UPDATE signup SET password="${hashedPassword}", token="" WHERE email="${email}"`
        conn.query(sql, (err, result) => {
            if(!err) return res.json({status: 200})
            else console.log(err)
        })
    }
}