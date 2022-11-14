const { SerialPort } = require('serialport')
const ipc = require('node-ipc')


const path = process.argv[2]
const port = new SerialPort({ path, baudRate: 115200 })

port.on('open', () => {
  console.log(`Port ${path} is open`)
})

port.on('data', (data) => {
  console.log(data.toString())
})
