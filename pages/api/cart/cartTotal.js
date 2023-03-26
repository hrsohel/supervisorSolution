import nc from "next-connect";
import conn from '../../../controllers/db'
import protect from "../../../middlewares/auth";
import jwt from "jsonwebtoken";
import companyProtect from "../../../middlewares/companyAuth";

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
.post((req, res) => {
    if(req.companyToken) {
        const {operator, courseId} = req.body
        var sql = ""
        if(operator === "plus") sql += `UPDATE cart SET total = total + 1 WHERE user=${req.companyToken.token.compnayId} AND courseId=${courseId};`
        if(operator === "minus") sql += `UPDATE cart SET total = total - 1 WHERE user=${req.companyToken.token.compnayId} AND courseId=${courseId};`
        sql += `SELECT * FROM cart WHERE user=${req.companyToken.token.compnayId} AND courseId=${courseId}`
        conn.query(sql, (err, result) => {
            if(!err) res.json({status: 201, message: result})
            else console.log(err)
        })
    }
})
.put((req, res) => {
  console.log(res)
})
export default handler