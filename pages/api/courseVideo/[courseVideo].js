import nc from "next-connect";
import conn from '../../../controllers/db'
import jwt from 'jsonwebtoken'
import protect from "../../../middlewares/auth";
import companyProtect from "../../../middlewares/companyAuth";

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
  .use(protect)
  .use(companyProtect)
  .get((req, res) => {
    if(req.token) {
      var userId = jwt.verify(req.token, process.env.SECRET_KEY).token
    } else return res.json({message: []})
    const courseCode = req.query.courseVideo
    // const sql = `SELECT * FROM courses WHERE ccode="${courseCode}" ORDER BY cserial ASC`
    const sql = `SELECT * FROM courseModules WHERE ccode="${courseCode}" ORDER BY serial ASC`
    const sql1 = `SELECT * FROM paidcourses JOIN courses ON paidcourses.courseId=courses.cid
    WHERE courses.ccode="${courseCode}" AND paidcourses.user=${userId}`
    conn.query(sql1, (err1, result1) => {
      if(!err1 &&  result1.length > 0) {
        conn.query(sql, (err, result) => {
          if(!err && result.length > 0) {
            res.json({message: result})
          } else if(err) console.log(err)
          else res.json({message: []})
        })
      } else if(err1) console.log(err1)
      else return res.json({message: []})
    })
  })
  .post((req, res) => {
    if(req.token) {
      const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
      const sql = `SELECT * FROM paidcourses JOIN courses ON courses.cid=paidcourses.courseId WHERE courses.ccode="${req.query.courseVideo}" AND paidcourses.user=${userId}
      AND paidcourses.paid=1 `
      conn.query(sql, (err, result) => {
        if(!err) res.json({message: result})
        else console.log(err)
      })
    }
  })

  export default handler