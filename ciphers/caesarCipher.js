const shared = require("../shared/constants");

const caesarCipher = (str, arg) => {
  const lwrStr = str.toLowerCase();
  const codeStr = lwrStr.replace(/[a-z]/g, (letter) => {
    if (arg === "1") {
      return String.fromCharCode(
        ((letter.charCodeAt(0) -
          shared.charCodeLowerCaseStart +
          shared.ceaserShift) %
          shared.engAlphabetLength) +
          shared.charCodeLowerCaseStart
      );
    }
    return String.fromCharCode(
      ((letter.charCodeAt(0) - shared.charCodeLowerCaseEnd - shared.rot8Shift) %
        shared.engAlphabetLength) +
        shared.charCodeLowerCaseEnd
    );
  });
  return codeStr;
};

module.exports = {
  caesarCipher,
};
