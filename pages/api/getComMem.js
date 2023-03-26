import conn from '../../controllers/db'
const jwt = require('jsonwebtoken')
import nc from "next-connect";
import protect from "../../middlewares/auth";
import companyProtect from '../../middlewares/companyAuth';
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
    if(req.companyToken) {
        const sql = `SELECT * FROM companymembers WHERE companyId = ${req.companyToken.token.compnayId}
        AND paid=0`
        conn.query(sql, (err, result) => {
            if(!err) res.json({message: result})
            else console.log(err)
        })
    } else return
})
export default handler