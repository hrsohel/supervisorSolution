import {getCookie} from 'cookies-next'

const protect = (req, res, next) => {
    if(getCookie("token", {req, res})) {
        const token = getCookie("token", {req, res})
        req.token = token
        next()
    } else {
        next()
    }
}

export default protect