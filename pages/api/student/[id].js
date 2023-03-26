import nc from "next-connect";
import fileUpload from 'express-fileupload'
import conn from '../../../controllers/db'
import fs from 'fs'
import moment from "moment";

export const config = {
    api: {
      bodyParser: false,
    },
  }

const StudentEdithandler = nc({
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
    const sql = `SELECT * FROM students WHERE sid=${id}`
    conn.query(sql, (err, result) => {
        return res.send(result)
    })
  })
  .post((req, res) => {
        const id = req.query.id
        const {fname, lname, email, admissionDate, dob, address, education, stuImage,
                gender, studentID, phone} = req.body
        const admission = moment(admissionDate).format("YYYY-MM-DD")
        const bDate = moment(dob).format("YYYY-MM-DD")
        if(req.files) {
            const image = req.files.newImage
            const ext = image.mimetype.split("/")[1]
            var img = `${Math.random()*10}.${Date.now()}.${ext}`
            image.mv(`./public/uploads/students/${img}`)
            fs.unlinkSync(`./public/uploads/students/${stuImage}`)
        } else {
            var img = stuImage
        }
        const sql = `UPDATE students SET firstName='${fname}', lastName='${lname}', email='${email}',
                    phone=${phone}, gender='${gender}', address='${address}', admissionDate='${admission}',
                    dob='${bDate}', education='${education}', stuImage='${img}', studentId=${studentID} WHERE sid=${id}`
        conn.query(sql, (err, result) => {
            if(err) console.log(err)
            else return res.json({status: 200, message: "User Updated"})
        })
    })

  export default StudentEdithandler;