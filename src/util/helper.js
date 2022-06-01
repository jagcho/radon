const getdate = function () {
        let today = new Date();
        console.log(today)

}
const getMonth = function () {
    let date = new Date();
    var month = date.getMonth();
    console.log(month)
}
const getBatchInfo = function () {
    console.log('Radon W3D3 ,topic for today is Nodejs module system')
}

module.exports.printDate= getdate
module.exports.printMonth= getMonth
module.exports.getBatchInfo= getBatchInfo