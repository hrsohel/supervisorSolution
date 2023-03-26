import nc from "next-connect";
import fileUpload from 'express-fileupload'
import conn from '../../../controllers/db'
import protect from '../../../middlewares/auth'
import jwt  from "jsonwebtoken";

export const config = {
    api: {
      bodyParser: true,
    },
  }

const studentHandler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    // res.status(500).end("Something broke!");
    next()
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
.use(fileUpload())
.use(protect)

.get((req, res) => {
    if(req.token) {
        const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
        const sql = `SELECT * FROM certificate JOIN courses ON certificate.ccode = courses.ccode WHERE certificate.studentId = ${userId}`
        conn.query(sql, (err, result) => {
            if(!err) res.json({message: result})
            else console.log(err)
        })
    }
})

export default studentHandler