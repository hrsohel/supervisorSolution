const jwt = require('jsonwebtoken')
import {getCookie} from 'cookies-next'

const companyProtect = (req, res, next) => {
    if(getCookie("companyToken", {req, res})) {
        const parsedToken = jwt.verify(getCookie("companyToken", {req, res}), process.env.SECRET_KEY)
        req.companyToken = parsedToken
        next()
    }
    else next()
    // if(getCookie("token", {req, res})) {
    //     const token = getCookie("token", {req, res})
    //     req.token = token
    //     next()
    // } else {
    //     next()
    // }
}

export default companyProtect