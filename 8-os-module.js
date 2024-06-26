const os = require('os')


// // see the os properties and attributes
// console.log(os)

// info about current user
const user = os.userInfo();
console.log(user)

// method returns the system uptime in seconds
const uptime = os.uptime()
console.log(`The system uptime: ${uptime / (60 * 60)} hours.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)