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
        const id = req.query.id
        const sql = `SELECT * FROM instructor WHERE iid=${id}`
        conn.query(sql, (err, result) => {
            if(!err) return res.json({status: 200, message: result})
            else console.log(err)
        })
    })
    .post((req, res) => {
        const {fname, lname, email, joiningDate, insImage,
            phone, gender, designation, department, dob, education
        } = req.body
        const join = moment(joiningDate).format("YYYY-MM-DD")
        const bDate = moment(dob).format("YYYY-MM-DD")
        if(req.files) {
            const image = req.files.newImage
            const ext = image.mimetype.split("/")[1]
            var img = `${Math.random()*10}.${Date.now()}.${ext}`
            image.mv(`./public/uploads/instructor/${img}`)
            fs.unlinkSync(`./public/uploads/instructor/${insImage}`)
        } else var img = insImage
        const id = req.query.id
        const sql = `UPDATE instructor SET fname='${fname}', lname='${lname}',
                    email='${email}', joiningDate='${join}', phone=${phone}, designation='${designation}',
                    gender='${gender}', department='${department}', dob='${bDate}', education='${education}',
                    insImage='${img}' WHERE iid=${id}`
        conn.query(sql, (err, result) => {
            if(!err) {
                return res.json({status: 200, message: "User Updated"})
            }
            else return res.send(err.message)
        })
    })

export default instructorHandler