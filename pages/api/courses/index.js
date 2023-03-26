import nc from "next-connect";
import fileUpload from 'express-fileupload'
import conn from '../../../controllers/db'
import {useRouter} from 'next/router'
import moment from 'moment'
import protect from "../../../middlewares/auth";

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
  .use(fileUpload())
  .use(protect)
  .get((req, res) => {
      try {
        const sql = "SELECT * FROM courses"
        conn.query(sql, (err, result) => {
            if(!err) return res.json({status: 200, message: result})
        })
      } catch (error) {
        console.log(error)
      }
  })
  .post((req, res) => {
    const  {cname, ccode, cdesc, startingDate, cduration, cprice,
      instructorName, maxStudents, phone} = req.body
    const start = moment(startingDate).format("YYYY-MM-DD")
    if(!cname || !ccode || !cdesc || !startingDate || !cduration || !cprice ||
        !instructorName || !maxStudents || !phone) return res.json({status: 401, message: "All Feild Required"})
    const image = req.files.image 
    const ext = image.mimetype.split("/")[1]
    const img = `${Math.random()*10}.${Date.now()}.${ext}`
    const sql = `INSERT INTO courses(cname, ccode, cdesc, startingDate, 
      cduration , cprice, instructorName, maxStudents, phone, cimage)
      VALUES('${cname}', '${ccode}', '${cdesc}', '${start}',
      '${cduration}', ${cprice}, '${instructorName}', '${maxStudents}', ${phone},
      '${img}')`
    const sql1 = `SELECT * FROM courses WHERE ccode='${ccode}'`
    conn.query(sql1, (err, result) => {
      if(result.length > 0) return res.json({status: 401, message: "This Course Exists"})
      else {
        image.mv(`./public/uploads/images/${img}`)
        conn.query(sql, (err, result) => {
          if(!err) return res.json({status: 200, message: "Course Added"})
          else return res.send(err.message)
        })
      }
    })
  })

export default handler;