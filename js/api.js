import $ from 'jquery'
export const sendRequest = () => {
  console.log('send request')
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
