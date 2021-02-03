import { runner } from '../observ'
import { hellper } from './index'
import { state } from '../state'
import $ from 'jquery'

export default function component() {
  const { getInputTemplate, checkboxComponent } = hellper()

  state.family_state.value = 'Не женат/Не замужем'
  const change = (event) => {
    state.family_state.value = event.target.value
  }

  runner(() => {
    const s = state.adresEq.value
    const area = $('textarea[name="registration_address"]')

    if (
      $('input[name="check_22"') &&
      $('input[name="check_22"').is(':checked')
    ) {
      state.address_registrate.value = state.addrest_fact.value
      area.val(state.address_registrate.value)
    } else {
      state.address_registrate.value = null
      area.val('')
    }
  })

  const template = [
    getInputTemplate(
      'ФИО',
      [
        {
          label: 'name',
          value: 'fio'
        },
        { label: 'required', value: 'required' }
      ],
      state.fio,
      null
    ),
    {
      element: {
        tag: 'div',
        classes: 'col-12 col-sm-10 col-md-8 mt-2 mb-2 text-secondary',
        inner:
          'Если изменяли фамилию, имя, отчество, укажите, когда, где и по какой причине, на основании какого документа '
      }
    },
    getInputTemplate(
      'Предыдущие фамилия, имя, отчество',
      [
        {
          label: 'name',
          value: 'old_fio'
        }
      ],
      state.old_fio,
      null
    ),

    getInputTemplate(
      'Число, месяц, год рождения',
      [
        {
          label: 'name',
          value: 'birthDate'
        },
        {
          label: 'type',
          value: 'date'
        },
        { label: 'required', value: 'required' }
      ],
      state.birthDate,
      'mt-2'
    ),
    getInputTemplate(
      'Место рождения (страна, город, поселок)',
      [
        {
          label: 'name',
          value: 'birthPlace'
        },
        { label: 'required', value: 'required' }
      ],
      state.birthPlace,
      'mt-2'
    ),
    getInputTemplate(
      'Гражданство',
      [
        {
          label: 'name',
          value: 'citizenship'
        },
        { label: 'required', value: 'required' }
      ],
      state.citizenship,
      'mt-2'
    ),
    {
      element: {
        tag: 'div',
        classes: 'flex col-12 col-sm-10 col-md-8 mt-2 '
      },
      children: [
        {
          element: {
            tag: 'div',
            classes: 'col-12 flex '
          },
          children: [
            {
              element: {
                tag: 'div',
                classes: 'col-12  full-width__col'
              },
              children: [
                getInputTemplate(
                  'Серия паспорта',
                  [
                    {
                      label: 'name',
                      value: 'passport_serias'
                    },
                    {
                      label: 'mask',
                      value: '0000'
                    },
                    { label: 'required', value: 'required' }
                  ],
                  state.passport_seria,
                  null
                )
              ]
            },
            {
              element: {
                tag: 'div',
                classes: 'col-12  full-width__col'
              },
              children: [
                getInputTemplate(
                  'Номер паспорта',
                  [
                    {
                      label: 'name',
                      value: 'passport_number'
                    },
                    {
                      label: 'mask',
                      value: '000000'
                    },
                    { label: 'required', value: 'required' }
                  ],
                  state.passport_number,
                  null
                )
              ]
            }
          ]
        },

        {
          element: {
            tag: 'div',
            classes: 'col-12 flex'
          },
          children: [
            {
              element: {
                tag: 'div',
                classes: 'col-12  full-width__col'
              },
              children: [
                getInputTemplate(
                  'Когда выдан паспорт',
                  [
                    {
                      label: 'name',
                      value: 'passport_issued_date'
                    },
                    { label: 'required', value: 'required' },
                    {
                      label: 'type',
                      value: 'date'
                    }
                  ],
                  state.passport_issued_date,
                  'mt-2'
                )
              ]
            },
            {
              element: {
                tag: 'div',
                classes: 'col-12   full-width__col flex'
              },
              children: [
                getInputTemplate(
                  'Кем выдан паспорт',
                  [
                    {
                      label: 'name',
                      value: 'passport_issued_by'
                    },
                    { label: 'required', value: 'required' }
                  ],
                  state.passport_issued_by,
                  'self-stertch'
                )
              ]
            }
          ]
        }
      ]
    },
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
            state: state.family_state,
            changeAction: change
          },
          children: [
            {
              element: {
                tag: 'option',
                inner: 'Не женат/Не замужем',
                attrs: [
                  {
                    label: 'value',
                    value: 'Не женат/Не замужем'
                  }
                ]
              }
            },
            {
              element: {
                tag: 'option',
                inner: 'Женат/Замужем',
                attrs: [
                  {
                    label: 'value',
                    value: 'Женат/Замужем'
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    getInputTemplate(
      'ИНН',
      [
        {
          label: 'name',
          value: 'inn'
        },
        { label: 'required', value: 'required' }
      ],
      state.inn,
      'mt-2'
    ),
    getInputTemplate(
      'Адрес фактического проживания ',
      [
        {
          label: 'name',
          value: 'real_address'
        },
        { label: 'required', value: 'required' }
      ],
      state.addrest_fact,
      'mt-2',
      true
    ),
    {
      element: {
        tag: 'div',
        inner: '(индекс, подробный адрес, телефон)',
        classes: 'input-group_hint'
      }
    },
    {
      element: {
        tag: 'div',
        classes: 'col-12 col-sm-10 col-md-8 mt-4 mb-4'
      },
      children: [
        checkboxComponent(
          'Адрес фактического проживания совпадает с пропиской',
          22,
          state.adresEq
        )
      ]
    },
    getInputTemplate(
      'Адрес прописки',
      [
        {
          label: 'name',
          value: 'registration_address'
        },
        { label: 'required', value: 'required' }
      ],
      state.address_registrate,
      'mt-2',
      true
    ),
    {
      element: {
        tag: 'div',
        inner: '(индекс, подробный адрес, телефон)',
        classes: 'input-group_hint'
      }
    }
  ]

  return {
    template,
    state
  }
}
