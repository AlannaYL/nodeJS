function morning() {
  console.log('早安你好')
}

function lunch(params) {
  console.log('午餐你好')
}

// console.log(module.exports);
exports.morning = morning;
exports.lunch = lunch;