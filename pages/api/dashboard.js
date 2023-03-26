import conn from '../../controllers/db'
import nc from 'next-connect'
import fileUpload from 'express-fileupload';

export const config = {
    api: {
      bodyParser: false,
    },
  }

const instructorHandler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
      onNoMatch: (req, res) => {
        res.status(404).end("Page is not found");
    },
})
    .use(fileUpload())
    .get((req, res) => {
        let sql = "SELECT * FROM courses;"
        sql += "SELECT * FROM employees;"
        sql += "SELECT * FROM students;"
        sql += "SELECT * FROM instructor;"
        conn.query(sql, (err, result) => {
            res.json({status: 200, message: result})
        })
    })

export default instructorHandler