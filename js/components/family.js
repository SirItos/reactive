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

                { label: 'required', value: 'required' }
              ],
              state.family[index].relation,
              'mt-2'
            ),
            getInputTemplate(
              'ФИО (полностью)',
              [
                {
                  label: 'name',
                  value: 'family_name'
                },

                { label: 'required', value: 'required' }
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
                { label: 'required', value: 'required' }
              ],
              state.family[index].birthDate,
              'mt-2'
            ),
            getInputTemplate(
              'Место рождения',
              [
                {
                  label: 'name',
                  value: 'relation'
                },

                { label: 'required', value: 'required' }
              ],
              state.family[index].birthPlace,
              'mt-2'
            ),
            getInputTemplate(
              'Адрес местожительства',
              [
                {
                  label: 'name',
                  value: 'relation'
                },

                { label: 'required', value: 'required' }
              ],
              state.family[index].regAdress,
              'mt-2'
            ),
            getInputTemplate(
              'Телефон',
              [
                {
                  label: 'name',
                  value: 'relation'
                },
                {
                  label: 'type',
                  value: 'tel'
                },
                {
                  label: 'mask',
                  value: '+7 (000) 000 00-00'
                },
                { label: 'type', value: 'tes' },
                { label: 'required', value: 'required' }
              ],
              state.family[index].phone,
              'mt-2'
            ),
            getInputTemplate(
              'Место работы',
              [
                {
                  label: 'name',
                  value: 'relation'
                },

                { label: 'required', value: 'required' }
              ],
              state.family[index].workPlace,
              'mt-2'
            ),
            getInputTemplate(
              'Должность',
              [
                {
                  label: 'name',
                  value: 'relation'
                },

                { label: 'required', value: 'required' }
              ],
              state.family[index].position,
              'mt-2'
            ),
            getInputTemplate(
              'Рабочий телефон',
              [
                {
                  label: 'name',
                  value: 'relation'
                },
                {
                  label: 'type',
                  value: 'tel'
                },
                {
                  label: 'mask',
                  value: '+7 (000) 000 00-00'
                },
                { label: 'type', value: 'tes' },
                { label: 'required', value: 'required' }
              ],
              state.family[index].workPhone,
              'mt-2'
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
