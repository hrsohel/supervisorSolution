import jwt from 'jsonwebtoken'
import conn from '../../../controllers/db'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
    const {token} = jwt.verify(req.query.token, process.env.SECRET_KEY)
    const {fname, lname, address, email, password} = token
    const hashPassword = await bcrypt.hash(password, 10)
    const ID = Math.floor((Math.random() + 1) * 1000000)
    const sql1 = `SELECT * FROM signup WHERE email="${email}"`
    const sql = `INSERT INTO signup(fname, lname, address, email, password, ID)
        VALUES("${fname}", "${lname}", "${address}", "${email}", "${hashPassword}", ${ID})
    `
    conn.query(sql1, (err1, result1) => {
        if(result1.length > 0 && !err1) return
        else {
            conn.query(sql, (err, result) => {
                if(!err) return 
                else console.log(err)
            })
        }
    })
}