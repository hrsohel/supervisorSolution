import nc from "next-connect";
import conn from '../../../controllers/db'
import protect from "../../../middlewares/auth";
import jwt from "jsonwebtoken";
import companyProtect from "../../../middlewares/companyAuth";

export const config = {
  api: {
    bodyParser: true,
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
.delete((req, res) => {
  if(req.token) {
    var userId = jwt.verify(req.token, process.env.SECRET_KEY).token
  } else if(req.companyToken) {
    var userId = req.companyToken.token.compnayId
    console.log(userId)
  } else return
  const sql = `SELECT * FROM cart WHERE user=${userId}`
  const sql1 = `DELETE FROM cart WHERE user=${userId}`
  conn.query(sql, (err, result) => {
    if(!err) {
      conn.query(sql1, (err1, result1) => {
        if(err1) console.log(err1)
      })
    } else console.log(err)
  })
})
.get((req, res) => {
  if(req.token) {
    var userId = jwt.verify(req.token, process.env.SECRET_KEY).token
  } else if(req.companyToken) {
    var userId = req.companyToken.token.compnayId
  } else return
  const sql = `SELECT * FROM courses JOIN cart ON cart.courseId=courses.cid WHERE cart.user=${userId}`
  conn.query(sql, (err, result) => {
    if(!err) res.json({status: 200, message: result, token: req.token, companyToken: req.companyToken})
    else console.log(err)
  })
})
.post((req, res) => {
  if(req.token) {
    var userId = jwt.verify(req.token, process.env.SECRET_KEY).token
    const sql = `SELECT * FROM cart JOIN courses ON courses.cid=cart.courseId WHERE user=${userId}`
    conn.query(sql, (err, result) => {
      if(!err) {
        let sql1 = ""
        for(let i = 0; i < result.length; i++) {
          sql1 += `INSERT INTO paidcourses(courseId, user, paid, amount) 
          VALUES(${result[i].courseId}, "${userId}", 1, ${result[i].cprice});`
        }
        conn.query(sql1, (err1, result1) => {
          if(!err1) res.json({status: 201})
          else console.log(err)
        })
      }
      else console.log(err)
    })
  } else if(req.companyToken) {
    var userId = req.companyToken.token.compnayId
    const sql = `UPDATE companymembers SET paid=1 WHERE companyId=${userId}`
    conn.query(sql, (err, result) => {
      if(!err) res.json({status: 201})
      else console.log(err)
    })
  } else return
  
})

export default handler