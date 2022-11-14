import { SerialPort } from 'serialport'

export default defineEventHandler(() => SerialPort.list())
