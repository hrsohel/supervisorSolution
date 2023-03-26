import conn from '../../../controllers/db'
import nc from 'next-connect'
import fileUpload from 'express-fileupload';
import moment from 'moment'

export const config = {
    api: {
      bodyParser: false,
    },
  }

const employeeHandler = nc({
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
        const sql = "SELECT * FROM employees"
        conn.query(sql, (err, result) => {
            if(!err) {
                return res.json({status: 200, message: result})
            }
        })
    })
    .post((req, res) => {
        const {fname, lname, email, phone, joiningDate , cpassword,password, gender, designation , department,
                dob, education, empImage} = req.body
        const join = moment(joiningDate).format("YYYY-MM-DD")
        const bDate = moment(dob).format("YYYY-MM-DD")
        const image = req.files.empImage
        const ext = image.mimetype.split("/")[1]
        const img = `${Math.random()*10}.${Date.now()}.${ext}`
        image.mv(`./public/uploads/employees/${img}`)
        const sql = `INSERT INTO employees(fname, lname, email, phone, joiningDate, 
                    password, gender, designation, department, dob, education, empImage)
                    VALUES('${fname}', '${lname}', '${email}', ${phone}, '${join}',
                    '${password}', '${gender}', '${designation}', '${department}', '${bDate}',
                    '${education}', '${img}')`
        const sql1 = `SELECT * FROM employees WHERE email='${email}'`
        conn.query(sql1, (err, result) => {
            if(!err && result.length > 0) return res.json({status: 403, message: "User Exists"})
            else {
                conn.query(sql, (err, result) => {
                    if(!err) return res.json({status: 200, message: "User Added"})
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
// export default function employee(req, res) {
//     if(req.method === 'GET') {
//         const sql = "SELECT * FROM employees"
//         conn.query(sql, (err, result) => {
//             if(!err) {
//                 return res.json({status: 200, message: result})
//             }
//         })
//     }
//     else if (req.method === 'POST') {
//         const {fname, lname, email, phone, joiningDate , cpassword,password, gender, designation , department,
//                 dob, education, empImage} = req.body
//         const sql = `INSERT INTO employees(fname, lname, email, phone, joiningDate, 
//                     password, gender, designation, department, dob, education, empImage)
//                     VALUES('${fname}', '${lname}', '${email}', ${phone}, ${joiningDate},
//                     '${password}', '${gender}', '${designation}', '${department}', ${dob},
//                     '${education}', '${empImage}')`
//         const sql1 = `SELECT * FROM employees eid='${email}'`
//         if(password !== cpassword) return res.json({status: 401, message: "Password Not Matched"})
//         else if(!fname || !lname || !email || !phone || !joiningDate  ||!password || !gender || !designation  || !department ||
//             !dob || !education || !empImage) return res.json({status: 402, message: "All Feild Required"})
//         conn.query(sql1, (err, result) => {
//             if(!err && result.length > 0) return res.json({status: 403, message: "User Exists"})
//             else {
//                 conn.query(sql, (err, result) => {
//                     if(!err) return res.json({status: 200, message: "User Added"})
//                 })
//             } 
//         })
//     }
//     else if(req.method === 'PUT') {
//         const {fname, lname, email, joiningDate, phone, gender, 
//             designation, department, dob, education,
//             instImage} = req.body
//         const id = req.query.id
//         const sql = `UPDATE instructor SET fname='${fname}', lname='${lname}',
//                     email='${email}', joiningDate='${joiningDate}', phone=${phone}, designation='${designation}',
//                     gender='${gender}', department='${department}', dob=${dob}, education='${education}',
//                     insImage='${instImage}' WHERE iid=${id}`
//         conn.query(sql, (err, result) => {
//             if(!err) {
//                 return res.json({status: 200, message: "User Updated"})
//             }
//             else return res.send(err.message)
//         })
//     }
// }

export default employeeHandler