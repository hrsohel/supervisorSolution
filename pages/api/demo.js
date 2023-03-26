import nc from "next-connect";
import conn from '../../controllers/db'
// import protect from "../../../middlewares/auth";
// import jwt from "jsonwebtoken";
// import companyAuth from '../../../middlewares/companyAuth'
import fileUpload from "express-fileupload";

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
.post((req, res) => {
  const video = req.files.video
  const videoExt = video.mimetype.split("/")[1]
  const videoName = `${Math.random()*10}.${Date.now()}.${videoExt}`
  const {ccode, serial, desc, title} = req.body
  const sql = `SELECT * FROM courseModules WHERE ccode="${ccode}" AND  serial=${serial}`
  const sql1 = `INSERT INTO courseModules(ccode, serial, cdesc, video, title)
                VALUES("${ccode}", ${serial}, "${desc}", "${videoName}", "${title}")`
  conn.query(sql, (err, result) => {
    if(!err && result.length > 0) return res.json({message: "This serial course already exists!"})
    else {
      conn.query(sql1, (err1, result1) => {
        video.mv(`./public/uploads/videos/${videoName}`)
        if(!err1) return res.json({message: "Course module added."})
        else console.log(err1)
      })
    }
  })
})
export default handler