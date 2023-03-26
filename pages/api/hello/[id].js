import conn from '../../../controllers/db'
import jwt  from 'jsonwebtoken';
import nc from "next-connect";
import protect from "../../../middlewares/auth";
import { compareSync } from 'bcryptjs';
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
    if(req.token) {
      const userId = jwt.verify(req.token, process.env.SECRET_KEY)
      const sql = `
        SELECT fname, lname, email, role FROM signup WHERE signup.signId=${userId.token};
        SELECT * FROM cart WHERE user=${userId.token}
      `
      conn.query(sql, (err, result) => {
          if(!err) return res.json({message: result})
          else console.log(err)
      })
    }
    else if(req.companyToken) {
      const sql = `
        SELECT name, email FROM company WHERE companyId=${req.companyToken.token.compnayId};
        SELECT * FROM cart WHERE user=${req.companyToken.token.compnayId}
      `
      conn.query(sql, (err, result) => {
          if(!err) return res.json({message: result})
          else console.log(err)
      })
    }else {
      return
    }
})

export default handler