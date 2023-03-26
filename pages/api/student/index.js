import nc from "next-connect";
import fileUpload from 'express-fileupload'
import conn from '../../../controllers/db'
import {useRouter} from 'next/router'
import moment from 'moment'

export const config = {
    api: {
      bodyParser: false,
    },
  }

const studentHandler = nc({
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
    const sql = "SELECT * FROM students"
    conn.query(sql, (err, result) => {
        if(!err) return res.json({status: 200, message: result})
    })
  })
  .post((req, res) => {
        const {
            studentId, fname, lname, email, phone, password, admissionDate,
            gender, address, dob, education
        } = req.body
        const admission = moment(admissionDate).format("YYYY-MM-DD")
        const bDate = moment(dob).format("YYYY-MM-DD")
        const image = req.files.stuImage
        const ext = image.mimetype.split("/")[1]
        const img = `${Math.random()*10}.${Date.now()}.${ext}`
        image.mv(`./public/uploads/students/${img}`)
        const sql1 = `SELECT * FROM students WHERE email='${email}'`
        const sql = `INSERT INTO students (studentId, firstName, lastName, email,
                    phone, password, admissionDate, gender, address, dob, education,
                    stuImage) VALUES ('${studentId}', '${fname}', '${lname}', '${email}',
                    ${phone}, '${password}', '${admission}', '${gender}', '${address}','${bDate}',
                    '${education}', '${img}')`
        conn.query(sql1, (err, result) => {
            if(!err && result.length > 0) return res.json({status: 403, message: "This User Already Exists"})
            else {
                conn.query(sql, (err, result) => {
                    if(err) res.send(err.message + " " + err.sql)
                    else return res.json({status: 200, message: "Student Added"})
                })
            }
        }) 
  })
  .put((req, res) => {
        const {
            studentId, fname, lname, email, phone, admissionDate,
            gender, address, dob, education, stuImage
        } = req.body
        const id = req.query.id
        console.log(req.body, id)
        const sql = `UPDATE students SET studentID='${studentId}', firstName='${fname}',
                    lastName='${lname}', email='${email}', phone=${phone}, admissionDate=${admissionDate},
                    gender='${gender}', address='${address}', dob=${dob}, education='${education}',
                    stuImage='${stuImage}' WHERE sid=${id}`
        conn.query(sql, (err, result) => {
            if(!err) {
                return res.json({status: 200, message: "User Updated"})
            }
            else return res.send(err.message)
        })
  })

export default studentHandler