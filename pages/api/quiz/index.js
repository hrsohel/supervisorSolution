import conn from '../../../controllers/db'
import nc from 'next-connect'
import fileUpload from 'express-fileupload';
import fs from 'fs'

export const config = {
    api: {
      bodyParser: false,
    },
  }

const quizHandler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
      onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
.use(fileUpload())
.post((req, res) => {
    const {
        ccode, qtitle, question, qserial, op1, op2, op3, op4, answer
    } = req.body
    const sql = `INSERT INTO quiz (ccode, qtitle, question, qserial, op1, op2, op3, op4, answer)
                VALUES("${ccode}"," ${qtitle}", "${question}", ${qserial},
                "${op1}", "${op2}", "${op3}", "${op4}", "${answer}")`
    const sql1 = `SELECT * FROM quiz WHERE ccode = "${ccode}" AND qserial = ${qserial}`
    conn.query(sql1, (err, result) => {
        if(!err && result.length > 0) return res.json({status: 401, message: "This Quiz already exist."})
        else{
          conn.query(sql, (err, result) => {
            if(!err) return res.json({status: 200, message: "Quiz Added successfully.."})
            else console.log(err)

          })
        }
      
      
    })
})

export default quizHandler