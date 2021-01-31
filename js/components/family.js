import { hellper } from './index'

export default function component() {
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
              null,
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
              null,
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
              null,
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
              null,
              'mt-2'
            ),
            getInputTemplate(
              'Телефон',
              [
                {
                  label: 'name',
                  value: 'relation'
                },
                { label: 'type', value: 'tes' },
                { label: 'required', value: 'required' }
              ],
              null,
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
              null,
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
              null,
              'mt-2'
            ),
            getInputTemplate(
              'Рабочий телефон',
              [
                {
                  label: 'name',
                  value: 'relation'
                },
                { label: 'type', value: 'tes' },
                { label: 'required', value: 'required' }
              ],
              null,
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
