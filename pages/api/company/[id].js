import conn from '../../../controllers/db'
const jwt = require('jsonwebtoken')
import nc from "next-connect";
import protect from "../../../middlewares/auth";
import companyProtect from '../../../middlewares/companyAuth';

export const config = {
  api: {
    bodyParser: false,
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
    const companyId = req.companyToken.token.compnayId
    const sql = `SELECT * FROM company WHERE companyId=${companyId}`
    conn.query(sql, (err, result) => {
        if(!err) return res.json({status: 200, message: result})
        else console.log(err)
    })
})

.post((req, res) => {
    const {company_name} = req.body
    const sql = `UPDATE company SET name="${company_name}" WHERE comId=${req.query.id}`
        conn.query(sql, (err, result) => {
        if(!err) return res.json({status: 200, message: "company updated"})
        else console.log(err)
    })
})

export default handler