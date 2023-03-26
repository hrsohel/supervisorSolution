import conn from '../../controllers/db'
import nc from 'next-connect'
import protect from '../../middlewares/auth';
import jwt  from 'jsonwebtoken';


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


    .use(protect)
    .get((req, res) => {
    if(req.token) {
      const userId = jwt.verify(req.token, process.env.SECRET_KEY).token
      const sql = `SELECT * FROM signup WHERE signId=  ${userId}`

      
      conn.query(sql, (err, result) => {
         
          if(!err) return res.json({status: 200, message: result})
          else console.log(err)
      })
    }else return 
    })

    export default studentHandler;