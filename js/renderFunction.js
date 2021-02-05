import $ from 'jquery'
import mask from 'jquery-mask-plugin'
import { runner } from './observ'
import { setValidation } from './stepValidator'

export const render = (obj, parent, step = 'personal') => {
  const elementInfo = obj.element
  const newNode = document.createElement(elementInfo.tag)
  newNode.innerText = elementInfo.inner || null

  newNode.value = elementInfo.state?.value || null

  if (elementInfo.classes) {
    newNode.className = elementInfo.classes
  }

  if (elementInfo.clickAction) {
    newNode.addEventListener('click', elementInfo.clickAction)
  }

  if (elementInfo.attrs) {
    elementInfo.attrs.forEach((attr) => {
      if (attr.label === 'mask') {
        $(newNode).mask(attr.value)

        return
      }
      newNode.setAttribute(attr.label, attr.value)
    })
  }

  if (elementInfo.state) {
    if (
      elementInfo.tag === 'input' ||
      elementInfo.tag === 'textarea' ||
      elementInfo.tag === 'select'
    ) {
      runner(() => {
        elementInfo.state.value
          ? $(newNode).addClass('input-group_input__not_empty')
          : $(newNode).removeClass('input-group_input__not_empty')
      })
    }
    let required = false

    newNode.addEventListener('change', (event) => {
      elementInfo.state.value =
        event.target.value === 'null' ? null : event.target.value
    })
    if (elementInfo.changeAction) {
      runner(elementInfo.changeAction)
    }
    if (
      elementInfo.attrs.find((item) => {
        return item.label === 'required'
      })
    ) {
      required = true
    }

    newNode.addEventListener('input', (event) => {
      elementInfo.state.value = event.target.value
      if (elementInfo.rules && elementInfo.rules.length) {
        if (required) {
          runner(validate, elementInfo.state, parent, elementInfo.rules)
        }
      }
    })

    if (required) {
      newNode.addEventListener('blur', (event) => {
        validate(elementInfo.state, parent, elementInfo.rules)
        runner(validate, elementInfo.state, parent, elementInfo.rules)
      })
      if (elementInfo.rules && elementInfo.rules.length) {
        setValidation(
          step,
          validate,
          elementInfo.state,
          parent,
          elementInfo.rules
        )
      }
    }
  }

  parent.appendChild(newNode)

  if (obj.children) {
    obj.children.forEach((child) => {
      render(child, newNode, step)
    })
  }
}

const validate = (state, target, rules, mode = false) => {
  let status = true
  for (let key in rules) {
    const result = rules[key](state.value)
    if ($(target).css('display') === 'none') {
      break
    }

    if (!result || typeof result === 'string') {
      $(target)
        .find('.input-group_validation-block')
        .addClass('input-group_validation-block__active')
      if (typeof result === 'string') {
        $(target).find('.input-group_validation-block__text').html(result)
      } else {
        $(target)
          .find('.input-group_validation-block__text')
          .html('Необходимо заполнить поле')
      }
      if (mode) {
        $('html, body').animate(
          { scrollTop: $(target).offset().top - 50 },
          'fast'
        )
        target.focus()
      }

      status = false

      break
    }

    $(target)
      .find('.input-group_validation-block')
      .removeClass('input-group_validation-block__active')
  }

  return status
}
