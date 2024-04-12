function firstStep(input) {
  // Your code here

  let parts = input.split('&');
  return parts;
}

function secondStep(input) {
  // Your code here
  let dividedParts = input.map((part) => {
    return part.split('=');
  });
  return dividedParts;
}

function thirdStep(input) {
  // Your code here
  let fixedInput = input.map((part) => {
    return [part[0], part[1].replace(/\+/g, ' ')];
  });
  return fixedInput;
}

function fourthStep(input) {
  // Your code here
  let fixedInput = input.map((part) => {
    return [part[0], decodeURIComponent(part[1])];
  });
  return fixedInput;
}

function fifthStep(input) {
  // Your code here
  let body = input.reduce((acc, part) => {
    let key = part[0];
    let value = part[1];
    let obj = {};
    obj[key] = value;
    let newObj = Object.assign(acc, obj);
    return newObj;
  }, {});
  return body;
}

function parseBody(str) {
  // Your code here
  let parts = firstStep(str);
  let subParts = secondStep(parts);
  let fixedParts = thirdStep(subParts);
  let decodedParts = fourthStep(fixedParts);
  return fifthStep(decodedParts);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
