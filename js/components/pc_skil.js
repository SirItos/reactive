import { state } from '../state'

export default function component() {
  state.pc_skill.value = 'программист'

  const change = (event) => {
    state.pc_skill.value = event.target.value
  }

  const template = [
    {
      element: {
        tag: 'div',
        classes: 'input-group col-12 col-sm-10 col-md-8 mt-2'
      },
      children: [
        {
          element: {
            tag: 'select',
            classes: 'input-group_select',
            attrs: [],
            state: state.pc_skill,
            changeAction: change
          },
          children: [
            {
              element: {
                tag: 'option',
                inner: 'программист',
                attrs: [
                  {
                    label: 'value',
                    value: 'программист'
                  }
                ]
              }
            },
            {
              element: {
                tag: 'option',
                inner: 'хороший пользователь',
                attrs: [
                  {
                    label: 'value',
                    value: 'хороший пользователь'
                  }
                ]
              }
            },
            {
              element: {
                tag: 'option',
                inner: 'пользователь',
                attrs: [
                  {
                    label: 'value',
                    value: 'пользователь'
                  }
                ]
              }
            },
            {
              element: {
                tag: 'option',
                inner: 'не работаю ',
                attrs: [
                  {
                    label: 'value',
                    value: 'не работаю '
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ]

  return {
    template
  }
}
