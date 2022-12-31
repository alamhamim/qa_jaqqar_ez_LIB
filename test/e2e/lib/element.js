
const wait = require('./wait');

async function element(ele) {
    //return element for later uses with await
    return $(ele);
}


module.exports = { element };