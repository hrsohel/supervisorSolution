import nc from "next-connect";
import conn from '../../../controllers/db'
import protect from "../../../middlewares/auth";
import jwt from "jsonwebtoken";
import companyAuth from '../../../middlewares/companyAuth'

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
.use(companyAuth)
.get((req, res) => {
  if(req.companyToken) {
    const courseId = req.query.id
    const sql = `SELECT * FROM cart WHERE user=${req.companyToken.token.compnayId} AND courseId=${courseId}`
    conn.query(sql, (err, result) => {
      if(!err) res.json({message: result})
      else console.log(err)
    })
  } else return
})
.post((req, res) => {
    if(req.token) {
        const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
        const sql = `INSERT INTO cart(user, courseId) VALUES(${userId}, ${req.query.id})`
        const sql1 = `SELECT * FROM cart WHERE courseId=${req.query.id} AND user=${userId}`
        conn.query(sql1, (err, result) => {
            if(!err && result.length > 0) res.json({message: "you already added this cart"})
            else if(err) console.log(err)
            else {
                conn.query(sql, (err, result) => {
                    if(!err) res.json({status: 201, message: "cart added"})
                    else console.log(err)
                })
            }
        })
    }
    else if (req.companyToken) {
        const userId = req.companyToken.token.compnayId
        const sql = `INSERT INTO cart(user, courseId) VALUES(${userId}, ${req.query.id})`
        const sql1 = `SELECT * FROM cart WHERE courseId=${req.query.id} AND user=${userId}`
        conn.query(sql1, (err, result) => {
            if(!err && result.length > 0) res.json({message: "you already added this cart"})
            else if(err) console.log(err)
            else {
                conn.query(sql, (err, result) => {
                    if(!err) res.json({status: 201, message: "cart added"})
                    else console.log(err)
                })
            }
        })
    }
    else res.json({status: 400, message: "you must be logged in"})
})
.delete((req, res) => {
    if(req.token) {
      var userId = jwt.verify(req.token, process.env.SECRET_KEY).token
    } else if(req.companyToken) {
      var userId = req.companyToken.token.compnayId
    }
    const cartId = req.query.id
    const sql = `DELETE FROM cart WHERE cartId=${cartId} AND user=${userId}`
    conn.query(sql, (err, result) => {
        if(!err) res.json({status: 200, message: "this cart deleted"})
        else console.log(err)
    })
})
export default handler