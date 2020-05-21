/* eslint-env mocha */
const fetch = require('isomorphic-fetch');
const Ffvue = require('../src/_ffvue');

describe('ffvue', () => {
  it('should show id', async () => {
    await fetch('http://localhost:8888/fhir/fhir/Questionnaire/1?_format=json')
      .then((response) => response.json())
      .then(async (myJson) => {
        const ff = Ffvue.ffvue(myJson);
        console.log(ff);
      });

  });

//   it('should add response to QuestionnaireResponse', async () => {
//     await fetch('http://hapi.fhir.org/baseDstu3/Questionnaire/417960/_history/1?_pretty=true&_format=json')
//       .then((response) => response.json())
//       .then((myJson) => {
//         const ff = Fhirformjs.fhirformResp(myJson, {});
//         console.log(ff);
//       });
//   });
});
