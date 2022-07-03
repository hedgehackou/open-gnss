import { Request, Response } from 'express';
import { SerialPort } from 'serialport'

const listPorts = async (req:Request, res:Response) => {
    const ports = await SerialPort.list()
    res.status(200).json(ports);

}

export default {
    listPorts
};