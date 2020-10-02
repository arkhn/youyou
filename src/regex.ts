export const regexDecimal = new RegExp(
  /^-?(0|[1-9][0-9]*)(.[0-9]+)?([eE][+-]?[0-9]+)?$/
);
export const regexInteger = new RegExp(/^[ \r\n\t\S]+$/);
export const regexString = new RegExp(/^[0]|[-+]?[1-9][0-9]*$/);
export const regexBase64Binary = new RegExp(/^(\s*([0-9a-zA-Z\+\=]){4}\s*)+$/);
export const regexInstant = new RegExp(
  /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))$/
);
export const regexDate = new RegExp(
  /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?$/
);
export const regexDateTime = new RegExp(
  /^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?$/
);
export const regexTime = new RegExp(
  /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/
);
export const regexOid = new RegExp(/^urn:oid:[0-2](\.(0|[1-9][0-9]*))+$/);
export const regexId = new RegExp(/^[A-Za-z0-9\-\.]{1,64}$/);
export const regexUnsignedInt = new RegExp(/^[0]|([1-9][0-9]*)$/);
export const regexMarkdown = new RegExp(/^\s*(\S|\s)*$/);
export const regexPositiveInt = new RegExp(/^+?[1-9][0-9]*$/);

//const test = regexString.test(string);
