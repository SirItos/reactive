import $ from 'jquery'
import { observable, runner } from './observ'

export const dialgoFunc = () => {
  const dialogState = observable({
    loading: {
      value: false
    },
    show: {
      value: false
    }
  })

  $('#closeModal').click(() => {
    dialogState.show.value = false
  })

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      dialogState.show.value = false
      dialogState.loading.value = false
    }
  })

  $(document).mouseup(function (e) {
    if (!$('.dialog').is(e.target) && $('.dialog').has(e.target).length === 0) {
      dialogState.show.value = false
      dialogState.loading.value = false
    }
  })

  const showDialog = () => {
    dialogState.show.value
      ? $('.dialog_container').addClass('dialog_container__active')
      : $('.dialog_container').removeClass('dialog_container__active')
  }

  const loading = () => {
    if (dialogState.loading.value) {
      $('.loader').css('display', 'flex')
      $('.dialog_content').css('display', 'none')
    } else {
      $('.loader').css('display', 'none')
      $('.dialog_content').css('display', 'block')
    }
  }

  runner(showDialog)
  runner(loading)

  return {
    dialogState
  }
}
