const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const crypto = require("crypto");
const cpp = require("./languages/cpp");
const python = require("./languages/python");
const router = express.Router();

const getFileName = (length) => {
  return crypto.randomBytes(length).toString("hex");
};

const extensions = {
  "cpp": "cpp",
  "python": "py",
};

router.post("/", async (req, res) => {
  const { code, language, stdin, time } = req.body;
  const fileName = getFileName(5);
  const sourceCodeFile = fileName;
  const inputFile = fileName + ".txt";
  fs.writeFile(inputFile, stdin, (err) => {
    if (err) res.send(err);
    fs.writeFile(
      `${sourceCodeFile}.${extensions[language]}`,
      code,
      async (err) => {
        if (err) res.send(err);
        if (language === "cpp") {
          try {
            const data = await cpp.execute(
              sourceCodeFile,
              inputFile,
              time,
              code
            );
            res.send(data);
          } catch (error) {
            res.send(error.message);
          }
        } else if (language === "python") {
          try {
            const data = await python.execute(
              sourceCodeFile,
              inputFile,
              time,
              code
            );
            res.send(data);
          } catch (ex) {
            res.send(ex.message);
          }
        } else {
          res.send("Select a valid programming language");
        }
        fs.promises.unlink(
          `${sourceCodeFile}.${extensions[language]}`,
          (err) => {
            if (err) throw err;
          }
        );
        fs.promises.unlink(inputFile, (err) => {
          if (err) throw err;
        });
      }
    );
  });
});

module.exports = router;