import personal from './personal'
import education from './education'
import programm from './programm'
import lang from './lang'
import pc from './pc_skil'
import work from './work'
import army from './army'
import family from './family'
import dop from './dop'
import final from './final'

export const hellper = () => {
  const getInputTemplate = (
    label,
    attrs = [],
    state = null,
    addClass = null,
    textarea = false
  ) => {
    const inputTemplateCopy = {
      element: {
        tag: 'div',
        classes: 'input-group col-12 col-sm-10 col-md-8'
      },
      children: [
        {
          element: {
            tag: 'input',
            attrs: [],
            classes: 'input-group_input',
            state: {}
          }
        },
        {
          element: {
            tag: 'label',
            classes: 'input-group_label'
          },
          children: [
            {
              element: {
                tag: 'div',
                classes: 'input-group_label',
                inner: null
              }
            }
          ]
        },
        {
          element: {
            tag: 'div',
            classes: 'input-group_input__focus'
          }
        },
        {
          element: {
            tag: 'div',
            classes: 'input-group_validation-block'
          },
          children: [
            {
              element: {
                tag: 'div',
                classes: 'input-group_validation-block__text',
                inner: 'Необходимо заполнить поле'
              }
            }
          ]
        }
      ]
    }

    inputTemplateCopy.children[1].element.inner = label
    inputTemplateCopy.children[0].element.attrs = attrs
    inputTemplateCopy.children[0].element.state = state
    inputTemplateCopy.children[0].element.rules = [
      (val) => {
        return !!val
      }
    ]
    inputTemplateCopy.element.classes =
      inputTemplateCopy.element.classes + ' ' + addClass
    if (textarea) {
      inputTemplateCopy.children[0].element.tag = 'textarea'
    }

    return inputTemplateCopy
  }

  const checkboxComponent = (innerText, id = 0, state = null) => {
    const checkbox = {
      element: {
        tag: 'div',
        classes: 'input-group_checkbox col-12 flex flex-center'
      },
      children: [
        {
          element: {
            tag: 'input',
            classes: '',
            state: state,
            attrs: [
              {
                label: 'type',
                value: 'checkbox'
              },
              {
                label: 'name',
                value: `check_${id}`
              },
              {
                label: 'id',
                value: `check_${id}`
              }
            ]
          }
        },
        {
          element: {
            tag: 'label',
            classes: 'input-group_checkbox__lable col',
            inner: innerText,

            attrs: [{ label: 'for', value: `check_${id}` }]
          }
        }
      ]
    }
    return checkbox
  }

  const btnTemplate = (innerText, action) => {
    return {
      element: {
        tag: 'div',
        classes: 'btn flat text-secondary',
        inner: innerText,
        clickAction: action
      }
    }
  }

  return {
    checkboxComponent,
    getInputTemplate,
    btnTemplate
  }
}

export const componetns = () => {
  return {
    personal: personal(),
    education: education(),
    lang: lang(),
    pc_skil: pc(),
    programm: programm(),
    work: work(),
    army: army(),
    dop: dop(),
    family: family(),
    final: final()
  }
}
