import conn from '../../../../controllers/db'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
    const hashedToken = jwt.verify(req.query.token, process.env.SECRET_KEY).token
    const {name, address, email, password} = hashedToken
    const companyId = Math.floor((Math.random() + 1) * 10e6)
    const hashedPassword = await bcrypt.hash(password, 10)
    const sql = `INSERT INTO company(name, address, email, companyId, password)
    VALUES("${name}", "${address}", "${email}", "${companyId}", "${hashedPassword}")
    `
    const sql1 = `SELECT * FROM company WHERE email="${email}"`
    conn.query(sql1, (err, result) => {
        if(!err && result.length > 0) return
        else if(err) console.log(err)
        else {
            conn.query(sql, (err, result) => {
                if(!err) return 
                else console.log(err)
            })
        }
    })
} 