import $ from 'jquery'
import { state } from './state'
// import axios from 'axios'

export const sendRequest = () => {
  const payload = createPayload(state)
  axios.post('http://php/', payload).then((response) => {
    console.log(response)
  })
}

let enabled = false

export const validateCheckbox = (on) => {
  enabled = on !== undefined ? on : enabled
  if (!enabled) return
  const checkbox = $('.final-container input')
  let res = true

  checkbox.each(function () {
    console.log($(this).is(':checked'))
    res = res ? $(this).is(':checked') : res
  })

  if (!res) {
    $('.next-btn').addClass('btn-disabled').attr('diabled', 'disabled')
  } else {
    $('.next-btn').removeClass('btn-disabled').removeAttr('diabled')
  }

  return res
}

const arrayPayload = (arr) => {
  const spliceIndex = []

  arr.forEach((item, index) => {
    const check = itemCheck(item)
    if (!check) {
      spliceIndex.push(index)
      return
    }
    arr[index] = check
  })

  return spliceData(arr, spliceIndex)
}

const spliceData = (arr, spliceIndex) => {
  spliceIndex.forEach((index) => {
    arr.splice(index, 1)
  })

  return arr
}

const itemCheck = (item) => {
  const keys = Object.keys(item)

  let emptyVal = 0

  keys.forEach((key) => {
    if (!item[key].value) {
      emptyVal++
    }
  })

  return keys.length > emptyVal ? createPayload(item) : null
}

const createPayload = (data) => {
  const resultPayload = {}

  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      resultPayload[key] = arrayPayload(data[key])
      return
    }

    resultPayload[key] = data[key].value
  })

  return resultPayload
}
