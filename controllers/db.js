import {createPool} from 'mysql'

const conn = createPool({
    host: 'localhost',
    user: "root",
    password: "",
    database: "courseproject",
    multipleStatements: true
})

module.exports = conn
