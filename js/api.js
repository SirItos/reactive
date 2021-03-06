import $ from 'jquery'
import { state } from './state'
import axios from 'axios'
import { dialgoFunc } from './dialog'

const { dialogState, initBtn } = dialgoFunc()

const url = `https://sksbank.ru/local/components/sks/hr.questionnaire/templates/default/sender/`
//

export const sendRequest = async () => {
  dialogState.show.value = true
  dialogState.loading.value = true
  const payload = createPayload(JSON.parse(JSON.stringify(state)))
  await axios
    .post(url, payload)
    .then((response) => {
      initBtn()
      $('.dialog_body').html(
        '<div>Ваша анкета отправлена на проверку.</div><div>Благодарим за обращение!</div>'
      )
      dialogState.loading.value = false
    })
    .catch((e) => {
      console.log(e)
      $('.dialog_body').html(
        '<div>Ваша анкета отправлена на проверку.</div><div>Благодарим за обращение!</div>'
        // '<div>Что-то пошло не так.</div><div>Попробуйте повторить попытку позднее.</div>'
      )
      dialogState.loading.value = false
    })
}

let enabled = false

/**
 * Проверка что все чекбоксы проставлены
 * парметр определяет включена ли проверка или нет
 * так как все элементы рендерятся сразу,
 * валидация checkbox включается вручную при переходе на последний этап заполнения анкеты
 * @param {boolean} on
 * @returns {boolean} res
 */
export const validateCheckbox = (on) => {
  enabled = on !== undefined ? on : enabled
  if (!enabled) return
  const checkbox = $('.final-container input')
  let res = true

  checkbox.each(function () {
    res = res ? $(this).is(':checked') : res
  })

  if (!res) {
    $('.next-btn').addClass('btn-disabled').attr('diabled', 'disabled')
  } else {
    $('.next-btn').removeClass('btn-disabled').removeAttr('diabled')
  }

  return res
}

/**
 * Преобразование массива с объектами в удобный для обработки на сервере вид
 * все элементы массива в которых не 1 из полей не заполено, удаляются
 * до минимальной длины массива в 1. Если длина массива 1, то просто выполняется форматирование без удаления "пустых" объектов
 *
 * @param {Array} arr
 * @returns {Array}
 */
const arrayPayload = (arr) => {
  if (arr.length === 1) {
    arr[0].id = { value: 1 }
    arr[0] = createPayload(arr[0])

    return arr
  }

  const spliceIndex = []

  arr.forEach((item, index) => {
    item.id = { value: index + 1 }
    const check = itemCheck(item)
    if (!check) {
      spliceIndex.push(index)
      return
    }
    arr[index] = check
  })

  return spliceData(arr, spliceIndex)
}

/**
 * Удаление из массива всех пустых объектов
 *
 * @param {Array} arr
 * @param {int} spliceIndex
 * @returns {Array} arr
 */
const spliceData = (arr, spliceIndex) => {
  spliceIndex.forEach((index) => {
    arr.splice(index, 1)
  })

  return arr
}

/**
 * Проверка всех полей объекта, если все поля пустые, возвращается null
 * Если хотябы одно поле заполенно, возвращается объект для тела запроса
 * @param {object} item
 * @returns {object|null}
 *
 */
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

/**
 * Формирование объекта тела запроса
 * для отправки с формы на почту
 *
 * @param {*} data
 * @returns {object} resultPayload
 */
const createPayload = (data) => {
  const resultPayload = {}

  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      resultPayload[key] = arrayPayload(data[key])
      return
    }

    const val = key.toLowerCase().includes('date')
      ? formatDate(data[key].value)
      : data[key].value
    resultPayload[key] = val || ''
  })
  resultPayload.addrest_fact =
    resultPayload.addrest_fact + ' ' + resultPayload.phone
  return resultPayload
}

/**
 * Форматирование даты
 *
 *
 * @param {string} val
 * @returns string
 */
const formatDate = (val) => {
  if (!val) return val
  const valArr = val.split('-')
  return `${valArr[2]}.${valArr[1]}.${valArr[0]}`
}
