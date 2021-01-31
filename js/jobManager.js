export default class JobManger {
  static subscriber

  constructor() {
    this.subscribers = new Set()
  }

  depend() {
    if (JobManger.subscriber) {
      this.subscribers.add(JobManger.subscriber)
    }
  }

  notify() {
    this.subscribers.forEach((sub) => {
      sub.job(...sub.params)
    })
  }
}
