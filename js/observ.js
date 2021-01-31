import Jmanager from './jobManager'

export const observable = (obj) => {
  if (!obj) {
    return obj
  }
  Object.keys(obj).forEach((key) => {
    let value = observable(obj[key])
    const jom = new Jmanager()
    Object.defineProperty(obj, key, {
      get() {
        jom.depend()
        return value
      },
      set(newValue) {
        value = newValue
        jom.notify()
      }
    })
  })
  return obj
}

export const runner = (job, ...params) => {
  Jmanager.subscriber = { job, params }
  const jobResult = job(...params)
  Jmanager.subscriber = null
  return jobResult
}
