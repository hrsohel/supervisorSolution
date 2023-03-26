import conn from '../../controllers/db'
import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import {deleteCookie, getCookie, setCookie} from 'cookies-next'
import protect from '../../middlewares/auth'
const jwt = require('jsonwebtoken')

export const config = {
    api: {
      bodyParser: true,
    },
  }

const instructorHandler = nc({
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
.get((req, res) => {
    deleteCookie("token", {req, res, path:"/", domain:".supervisorsolutions.com"})
    res.json({message: "you are logged out"})
})
.post((req, res) => {
    try {
        const {email, password} = req.body
        const sql = `SELECT * FROM signup WHERE email="${email}"`
        conn.query(sql, async (err, result) => {
            if(!err && result.length === 0) res.json({message: "This user not exist"})
            else {
                if(!(await bcrypt.compare(password, result[0].password))) res.json({message: "email or password in valid"})
                else {
                    const token = jwt.sign({token: result[0].signId}, process.env.SECRET_KEY)
                    setCookie("token", token, {req, res, maxAge: 60*60*24*3, httpOnly: true, path: "/", domain: ".supervisorsolutions.com"})
                    const cookie = getCookie("token", {req, res})
                    return res.json({status: 200, message: "you are logged in", token : cookie})
                }
            }
        })
    } catch (error) {
        res.json({message: error.message})
    }
})

export default instructorHandler

