export const validationGroups = {}

export const setValidation = (key, func, ...param) => {
  if (!validationGroups[key]) {
    validationGroups[key] = []
  }

  validationGroups[key].push({ func, params: param })
}
