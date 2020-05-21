import { R4 } from '@ahryman40k/ts-fhir-types'

interface ffvue_field {

  type: string,
  inputType: string,
  label: string,
  model: string,
  id?: string,
  values?: Array<string>,
  placeholder?: string,
  readonly?: boolean,
  disabled?: boolean,
  featured?: boolean,
  required?: boolean,
  default?: boolean,
  hint?: string,
  validator?: object

}

interface ffvue_model {
  model: R4.IQuestionnaireResponse
}

interface ffvue_schema {

  fields?: Array<ffvue_field>
  groups?: Array<ffvue_groups>
}

interface ffvue_groups {

  legend: string,
  fields: Array<ffvue_field>

}

const ffvue = (fhirjson: R4.IQuestionnaire) => {

  console.log(fhirjson)
  let ffvue_form : ffvue_schema = {}
  console.log(ffvue_form)
  let ffvue_resp : ffvue_model = {model: {resourceType: 'QuestionnaireResponse'}}
  return ffvue_resp
}

module.exports = {"ffvue": ffvue}
