const fs = require('fs')
const Lunchmeeting = require('./lunchmeeting')

const dbPath = `${__dirname}/data.json`

async function saveData(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(data), (err, file) => {
            if (err) return reject(err)
            resolve()
        })
    })
}

async function readData() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, (err, file) => {
            if (err) return reject(err)
            const data = JSON.parse(file).map(Lunchmeeting.create)
            resolve(data)
        })
    })
}



module.exports = {
    saveData,
    readData
}