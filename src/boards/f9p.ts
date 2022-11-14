import { fork } from 'child_process'
const controller = new AbortController()
const { signal } = controller

let process: any = null

export function connect (path:string) {
  process = fork('src/boards/f9p-worker.js', [path], { signal })
}

export function disconnect () {
  controller.abort()
}
