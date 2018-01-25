// let config = {
//     user:     'AnsKbUser',
//     password: 'NameServices',
//     server:   'SQL4-PC\\SQL4',
//     database: 'KB3_Selector',
//     stream: true //enabled to work with a large number of ~rows TODO: after app is done come back and see if this is needed
// }
const sql = require('mssql') //SQL Server interaction

module.exports.LaunchSP = function () { // TODO: is this the best way to export a single function (future-proof for multiple functions)
    let config = {
        user:     'AnsKbUser',
        password: 'NameServices',
        server:   'SQL4-PC\\SQL4',
        database: 'KB3_Selector',
        stream: true //enabled to work with a large number of ~rows TODO: after app is done come back and see if this is needed
    }
    sql.connect(config).then( pool => {
        return pool.request() 
            //.input(parameter, type, value)
            //.output(parameter, type)
            .execute('spSelectData')
    }) .catch(err=> {
        console.log(`Error caught: ${err}`)
    }) .then (result => {
        sql.close()
        console.log("Completed")
        //console.log(`Result in compDataSel.js is: \n ${JSON.stringify(result)}`)
        return result
    })
}