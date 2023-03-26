import conn from '../../../controllers/db'
import nc from 'next-connect'
import fileUpload from 'express-fileupload';
import fs from 'fs'
import moment from 'moment';

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
    .get((req, res) => {
        const id = req.query.id
        const sql = `SELECT * FROM courses WHERE cid=${id}`
        conn.query(sql, (err, result) => {
            if(!err) {
                return res.json({ststus: 200, message: result})
            }
        })
    })
    .post((req, res) => {
        const  {cname, ccode, cdesc, startingDate, cduration, cprice,
          instructorName, maxStudents, cimage} = req.body
        const start = moment(startingDate).format("YYYY-MM-DD")
        const id = req.query.id
        if(req.files) {
            const image = req.files.newImage
            const ext = image.mimetype.split("/")[1]
            var img = `${Math.random()*10}.${Date.now()}.${ext}`
            image.mv(`./public/uploads/images/${img}`)
            fs.unlinkSync(`./public/uploads/images/${cimage}`)
        } else var img = cimage
        const sql = `UPDATE courses SET cname="${cname}",
          ccode="${ccode}", cdesc="${cdesc}", startingDate="${start}", cduration="${cduration}",
          cprice=${cprice}, instructorName="${instructorName}", maxStudents="${maxStudents}",
          cimage="${img}" WHERE cid=${id}`
        conn.query(sql, (err, result) => { 
            if(!err) {
                return res.json({status: 200, message: "Course Updated"})
            }
            else return res.send(err.message)
        })
    })
    .put(async (req, res) => {
        const limit = req.query.id
        const sql1 = "SELECT * FROM courses"
        conn.query(sql1, (err1, result1) => {
            if(!err1) {
                const length = Math.ceil(result1.length / 5)
                const offset = (limit - 1) * 5
                const sql = `SELECT * FROM courses ORDER BY cid DESC LIMIT 5 OFFSET ${offset}`
                conn.query(sql, (err, result) => {
                    if(!err) res.json({message: result, length})
                    else console.log(err)
                })
            } else console.log(err1)
        })
         
    })

export default handler