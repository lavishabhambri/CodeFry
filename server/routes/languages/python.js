const exec = require("child_process").exec;
const fs = require("fs");
const crypto = require("crypto");

const validate = (code) => {
  reg1 = RegExp(/\bimport\W+(?:\w+\W+){0,}(?:os|subprocess|importlib)\b/g);
  words = ["open(", "os"];
  const lowerString = code.toLowerCase();
  for (const negativeWord of words) {
    if (lowerString.includes(negativeWord.toLowerCase())) {
      return false;
    }
  }
  if (code.match(reg1)) {
    return false;
  }
  return true;
};

const execute = function (sourceCodeFile, inputFile, timeOut, code) {
  return new Promise((resolve, reject) => {
    if (validate(code)) {
      exec(
        `python ${sourceCodeFile}.py < ${inputFile}`,
        { timeout: timeOut, maxBuffer: 20 * 1024 * 1024 },
        (err, stdout, stderr) => {
          if (err) {
            console.error("execution error: ", err);
            const error = {
              details: stderr,
            };
            reject(new Error(error));
          } else {
            const data = {
              output: stdout,
            };
            resolve(data);
          }
        }
      );
    } else {
      reject(new Error("Error: Code Validatation Failed.."));
    }
  });
};

exports.execute = execute;
