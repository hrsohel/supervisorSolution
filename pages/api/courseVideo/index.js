import nc from "next-connect";
import fileUpload from 'express-fileupload'
import conn from '../../../controllers/db'
import protect from '../../../middlewares/auth'
import companyProtect from '../../../middlewares/companyAuth'
import jwt from 'jsonwebtoken'

export const config = {
    api: {
      bodyParser: false,
    },
  }

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
.use(fileUpload())
.use(protect)
.use(companyProtect)

.get((req, res) => {
    const user = jwt.verify(req.token, process.env.SECRET_KEY).token
    const sql = `SELECT * FROM paidcourses JOIN courses ON courses.cid=paidcourses.courseId
    WHERE user=${user}`
    conn.query(sql, (err, result) => {
        if(!err) res.json({message: result})
        else console.log(err)
    })
})

export default handler