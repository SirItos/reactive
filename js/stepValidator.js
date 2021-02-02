export const validationGroups = {}

export const setValidation = (key, func, ...param) => {
  if (!validationGroups[key]) {
    validationGroups[key] = []
  }

  validationGroups[key].push({ func, params: param })
}

const stepNumToName = {
  0: 'personal',
  3: 'army'
}

export const validateStep = (step) => {
  let result = true

  const validateFunctions = validationGroups[stepNumToName[step]]
  if (!validateFunctions) {
    return result
  }
  for (let phase of validateFunctions) {
    if (!phase.func(...phase.params, true)) {
      result = false
      break
    }
  }

  return result
}
