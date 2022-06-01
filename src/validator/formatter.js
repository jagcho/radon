const trim = function(){
    const name= '   Functionup   ';
    console.log(name.trim());
}
const toLowerCase= function(){
    const name= 'Functionup';
    console.log(name.toLowerCase());
}
const toUpperCase = function(){
    const name= 'functionup';
    console.log(name.toUpperCase());
}


module.exports.trim= trim
module.exports.toLowerCase= toLowerCase
module.exports.toUpperCase= toUpperCase