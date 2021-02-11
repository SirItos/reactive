import { hellper } from './index'
import { state } from '../state'

export default function component(index = 0) {
  const { getInputTemplate } = hellper()
  const template = [
    {
      element: {
        tag: 'div',
        classes: 'flex flex-center col-12  mt-4   info_block'
      },
      children: [
        {
          element: {
            tag: 'div',
            classes: 'flex flex-center col-12 '
          },
          children: [
            getInputTemplate(
              'Степень родства',
              [
                {
                  label: 'name',
                  value: 'relation'
                },
                {
                  label: 'required',
                  value: 'required'
                }
              ],
              state.family[index].relation,
              'mt-2'
            ),
            getInputTemplate(
              'ФИО (полностью)',
              [
                {
                  label: 'name',
                  value: 'family_fio'
                },
                {
                  label: 'required',
                  value: 'required'
                }
              ],
              state.family[index].fio,
              'mt-2 '
            ),
            getInputTemplate(
              'Дата рождения',
              [
                {
                  label: 'name',
                  value: 'family_birthDate'
                },
                {
                  label: 'type',
                  value: 'date'
                },
                {
                  label: 'required',
                  value: 'required'
                }
              ],
              state.family[index].birthDate,
              'mt-2'
            ),
            getInputTemplate(
              'Место рождения',
              [
                {
                  label: 'name',
                  value: 'family_birthPlace'
                },
                {
                  label: 'required',
                  value: 'required'
                }
              ],
              state.family[index].birthPlace,
              'mt-2'
            ),
            getInputTemplate(
              'Адрес местожительства',
              [
                {
                  label: 'name',
                  value: 'family_regAdress'
                },
                {
                  label: 'required',
                  value: 'required'
                }
              ],
              state.family[index].regAdress,
              'mt-2'
            ),
            getInputTemplate(
              'Телефон',
              [
                {
                  label: 'name',
                  value: 'family_phone'
                },
                {
                  label: 'required',
                  value: 'required'
                },
                {
                  label: 'type',
                  value: 'tel'
                },
                {
                  label: 'mask',
                  value: '+7 (000) 000 00-00'
                },
                { label: 'type', value: 'tel' }
              ],
              state.family[index].phone,
              'mt-2',
              false,
              [
                (val) => {
                  if (!val) return true

                  return val.length === 18 || 'Укажите полный номер телефона'
                }
              ]
            ),
            getInputTemplate(
              'Место работы',
              [
                {
                  label: 'name',
                  value: 'family_workPlace'
                },
                {
                  label: 'required',
                  value: 'required'
                }
              ],
              state.family[index].workPlace,
              'mt-2'
            ),
            getInputTemplate(
              'Должность',
              [
                {
                  label: 'name',
                  value: 'family_position'
                },
                {
                  label: 'required',
                  value: 'required'
                }
              ],
              state.family[index].position,
              'mt-2'
            ),
            getInputTemplate(
              'Рабочий телефон',
              [
                {
                  label: 'name',
                  value: 'family_workPhone'
                },
                {
                  label: 'required',
                  value: 'required'
                },
                {
                  label: 'type',
                  value: 'tel'
                },
                {
                  label: 'mask',
                  value: '+7 (000) 000 00-00'
                },
                { label: 'type', value: 'tel' }
              ],
              state.family[index].workPhone,
              'mt-2',
              false,
              [
                (val) => {
                  if (!val) return true

                  return val.length === 18 || 'Укажите полный номер телефона'
                }
              ]
            )
          ]
        }
      ]
    }
  ]

  return {
    template
  }
}
