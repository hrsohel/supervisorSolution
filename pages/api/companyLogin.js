import conn from '../../controllers/db'
import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import {deleteCookie, getCookie, setCookie} from 'cookies-next'
import protect from '../../middlewares/auth'
import companyProtect from '../../middlewares/companyAuth'
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
.use(companyProtect)
.get((req, res) => {
    deleteCookie("companyToken", {req, res, path:"/", domain:".supervisorsolutions.com"})
    res.json({message: "you are logged out"})
})
.post((req, res) => {
    try {
        const {email, password} = req.body
        const sql = `SELECT * FROM company WHERE email="${email}"`
        conn.query(sql, async (err, result) => {
            if(!err && result.length === 0) res.json({message: "This user not exist"})
            else {
                if(!(await bcrypt.compare(password, result[0].password))) res.json({message: "email or password in valid"})
                else {
                    const token = jwt.sign({token: {
                        compnayId: result[0].companyId,
                        role: "company"
                    }}, process.env.SECRET_KEY)
                    setCookie("companyToken", token, {req, res, maxAge: 60*60*24*3, httpOnly: true, path: "/", domain: ".supervisorsolutions.com"})
                    const cookie = getCookie("companyToken", {req, res})
                    return res.json({status: 200, message: "you are logged in", token : cookie})
                }
            }
        })
    } catch (error) {
        res.json({message: error.message})
    }
})

export default instructorHandler

