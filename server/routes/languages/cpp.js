const exec = require("child_process").exec;
const fs = require("fs");
const crypto = require("crypto");

const validate = (code) => {
  if (!code.toString().includes("#include")) return false;
  if (!code.toString().includes("main")) return false;
  return true;
};

const execute = function (sourceCodeFile, inputFile, timeOut, code) {
  return new Promise((resolve, reject) => {
    if (validate(code)) {
      exec(
        `g++ ${sourceCodeFile}.cpp -o ${sourceCodeFile} && ./${sourceCodeFile} < ${inputFile}`,
        { timeout: timeOut, maxBuffer: 20 * 1024 * 1024 },
        (err, stdout, stderr) => {
          if (err) {
            if (stderr) {
              const error = {
                type: "COMPILATION ERROR",
                details: stderr,
              };
              console.log(error);
              reject(new Error(error));
            } else if (
              err.toString().includes("ERR_CHILD_PROCESS_STDIO_MAXBUFFER")
            ) {
              const error = {
                type: "MaxBuffer Exceeded",
                details: "MEMORY LIMIT EXCEEDED",
              };
              console.log(error);
              reject(new Error(error));
            } else if (err.signal === "SIGTERM") {
              const error = {
                type: "TIME LIMIT EXCEEDED",
                details: "Code failed to execute in given time",
              };
              reject(new Error(error));
            } else {
              const error = "Error: Try Again";
              console.log(err.toString());
              reject(new Error(error));
            }
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