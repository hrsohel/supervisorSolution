import nc from "next-connect";
import conn from '../../controllers/db'
import protect from "../../middlewares/auth";
import jwt from "jsonwebtoken";
import companyAuth from '../../middlewares/companyAuth'

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
    const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
    const sql = `SELECT * FROM companymembers WHERE paid=1`
    const sql1 = `SELECT email FROM signup WHERE signId=${userId}`
    conn.query(sql1, (err1, result1) => {
        if(!err1) {
            if(result1.length) {
                conn.query(sql, (err, result) => {
                    let emails = []
                    let course = []
                    let courses = []
                    for (let i = 0; i < result.length; i++) {
                        emails.push(JSON.parse(result[i].emails));
                        for(let i = 0; i < emails.length; i++) {
                            if(emails[i].indexOf(result1[0].email) >= 0) {
                                course.push(JSON.parse(result[i].courses))
                            }
                        }
                    }
                    for(let i = 0; i < course.length; i++) {
                        for(let j = 0; j < course[i].length; j++) {
                            courses.push(course[i][j])
                        }
                    }
                    if(!err) {
                        if(courses.length) {
                            let sql2 = ""
                            for(let i = 0; i < courses.length; i++) {
                                sql2 += `SELECT * FROM courses WHERE cid=${courses[i]};`
                            }
                            conn.query(sql2, (err2, result2) => {
                                if(!err2) res.json({message: [result2], status: 200})
                            })
                        } else res.json({message: []})
                    }
                    else console.log(err)
                })
            } else res.json({message: []})
        }
    })
    
})

export default handler