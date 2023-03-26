import conn from '../../../controllers/db'
import nc from 'next-connect'
import fileUpload from 'express-fileupload';
import protect from '../../../middlewares/auth'

export const config = {
    api: {
      bodyParser: false,
    },
  }

const quizHandler = nc({
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
    const code = req.query.code
    // const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
    // const sql1 = `SELECT * FROM paidcourses WHERE courseId="${code}" AND user="${userId}"`
    const sql = `SELECT * FROM quiz WHERE ccode='${code}'`
    conn.query(sql, (err, result) => {
        if(!err) return res.json({status: 200, message: result})
    })
})

export default quizHandler