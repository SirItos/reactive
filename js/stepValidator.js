export const validationGroups = {}

export const setValidation = (key, func, ...param) => {
  if (!validationGroups[key]) {
    validationGroups[key] = []
  }
  const keyToObj = key === 'lang' || key === 'pc_skill' ? 'education' : key
  validationGroups[keyToObj].push({ func, params: param })
}

const stepNumToName = {
  0: 'personal',
  1: 'education',
  2: 'work',
  3: 'army',
  4: 'family',
  5: 'dop'
}

export const validateStep = (step) => {
  return true
  // let result = true

  // const validateFunctions = validationGroups[stepNumToName[step]]

  // if (!validateFunctions) {
  //   return result
  // }
  // for (let phase of validateFunctions) {
  //   if (!phase.func(...phase.params, true)) {
  //     result = false
  //     break
  //   }
  // }

  // return result
}
