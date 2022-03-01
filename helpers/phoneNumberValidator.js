export function phoneNumberValidator(number) {
  var regex = /^[0-9]+$/;
  return number.match(regex);
}
