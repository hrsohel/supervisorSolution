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
        const userId = req.companyToken.token.compnayId
        const sql = `SELECT * FROM companymembers WHERE companyId=${userId} AND courses="[${req.body.carts}]"`
        conn.query(sql, (err, result) => {
            if(!err) res.json({message: result, companyToken: req.companyToken})
            else console.log(err)
        })
    }
})

export default handler