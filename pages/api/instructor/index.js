import conn from '../../../controllers/db'
import nc from 'next-connect'
import fileUpload from 'express-fileupload';
import moment from 'moment'

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
        if(req.method === "GET") {
            const sql = "SELECT * FROM instructor"
            conn.query(sql, (err, result) => {
                if(!err) {
                    return res.json({status: 200, message: result})
                }
            })
        }
    })
    .post((req, res) => {
        const {fname, lname, email, joiningDate, password, cpassword,
                phone, gender, designation, department, dob, education
                } = req.body
        const join = moment(joiningDate).format("YYYY-MM-DD")
        const bDate = moment(dob).format("YYYY-MM-DD")
        const image = req.files.instImage
        const ext = image.mimetype.split("/")[1]
        const img = `${Math.random()*10}.${Date.now()}.${ext}`
        const sql = `INSERT INTO instructor(fname, lname, email, joiningDate,
                    password, phone, gender, designation, department,dob, education, insImage)
                    VALUES('${fname}', '${lname}', '${email}', '${join}', '${password}',
                    ${phone}, '${gender}', '${designation}', '${department}', '${bDate}',
                    '${education}', '${img}')`
        const sql1 = `SELECT * FROM instructor WHERE email='${email}'`
        conn.query(sql1, (err, result) => {
            if(!err && result.length > 0) return res.json({status: 403, message: "This User Exists"})
            else {
                conn.query(sql, (err, result) => {
                    if(!err) {
                        image.mv(`./public/uploads/instructor/${img}`)
                        return res.json({status: 200, message: "User Added"})
                    }
                    else if(err) res.send(err.message)
                })
            }
        })
    })
    .put((req, res) => {
        const {fname, lname, email, joiningDate, phone, gender, 
            designation, department, dob, education,
            instImage} = req.body
        const id = req.query.id
        const sql = `UPDATE instructor SET fname='${fname}', lname='${lname}',
                    email='${email}', joiningDate='${joiningDate}', phone=${phone}, designation='${designation}',
                    gender='${gender}', department='${department}', dob=${dob}, education='${education}',
                    insImage='${instImage}' WHERE iid=${id}`
        conn.query(sql, (err, result) => {
            if(!err) {
                return res.json({status: 200, message: "User Updated"})
            }
            else return res.send(err.message)
        })
    })

export default instructorHandler