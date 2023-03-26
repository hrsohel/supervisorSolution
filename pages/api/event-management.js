import conn from '../../controllers/db'
import nc from 'next-connect'
import fileUpload from 'express-fileupload';
import fs from 'fs'
import moment from 'moment';

export const config = {
    api: {
      bodyParser: false,
    },
  }

const eventHandler = nc({
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
    const sql = 'SELECT * FROM eventmanagement'
    conn.query(sql, (err, result) => {
        if(!err) return res.json({status: 200, message: result})
    })
})
.post((req, res) => {
    const {title, start, end} = req.body
    const startDate = moment(start).format("YYYY-MM-DD")
    const endDate = moment(end).format("YYYY-MM-DD")
    const sql = `INSERT INTO eventmanagement (title, start, end) VALUES('${title}', '${startDate}', '${endDate}')`
    conn.query(sql, (err, result) => {
        if(!err) return res.json({status: 200, message: "Event Added"})
        else console.log(err)
    })
})

export default eventHandler