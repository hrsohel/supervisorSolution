import nc from "next-connect";
import conn from '../../controllers/db'
import protect from "../../middlewares/auth";
import jwt from "jsonwebtoken";
import companyAuth from '../../middlewares/companyAuth'
import bcrypt from 'bcryptjs'

export const config = {
  api: {
    bodyParser: true,
  },
}

const passwordHandler = nc({
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
.use(companyAuth)

.post(async(req, res) => {
    const {nPassword, oPassword} = req.body
    const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
    const hashedNPassword = await bcrypt.hash(nPassword, 10)
    const sql = `SELECT password FROM signup WHERE signId=${userId}`
    const sql1 = `UPDATE signup SET password="${hashedNPassword}" WHERE signId=${userId}`
    conn.query(sql, async (err, result) => {
        if(!err) {
            const hashedPassword = await bcrypt.compare(oPassword, result[0].password)
            if(!hashedPassword) {
                return res.json({message: "Password invalid!"})
            }
            else if(err) console.log(err)
            else {
                conn.query(sql1, (err1, result1) => {
                    if(!err) {
                        return res.json({message: "Password updated."})
                    } else {
                        console.log(err1)
                    }
                })
            }
        }
    })
})

export default passwordHandler