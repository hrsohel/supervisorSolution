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
  // console.log(req.query.id)
    if(req.token) {
        const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
        const courseCode = req.query.id
        const sql = `
          SELECT * FROM signup WHERE signId = ${userId};
          SELECT * FROM courses WHERE ccode = ${courseCode}
        `
      conn.query(sql, (err, result) => {
        if(!err) res.json({message: result})
        else console.log(err)
      })
    } else return
})

.post((req, res) => {
  const {marks, courseCode} = req.body.formData
  if(req.token) {
    const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
    const sql = `INSERT INTO certificate (studentId, ccode, marks)
                VALUES(${userId}, "${courseCode}", ${marks})`
    conn.query(sql, (err, result) => {
      if(!err) res.json({message: "certificate add"})
      else console.log(err)
    })
  } else return
})

export default studentHandler