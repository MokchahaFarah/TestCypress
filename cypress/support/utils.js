const fs = require('fs');
const path = require("path");

//emplacement des fichier feature
const getFixtureFile = fileName => Cypress.env("fixturesBaseDir").concat(fileName);

//check file exist
const fileExistsWithCaseSync = filepath => {
    const dir = path.dirname(filepath);
    if (dir === "/" || dir === ".") return true;
    const filenames = fs.readdirSync(dir);
    if (filenames.indexOf(path.basename(filepath)) === -1) {
        return false;
    }
    return fileExistsWithCaseSync(dir);
};

//parameterizedLocator
const getParameterizedLocator = (unchangedLocator, ...param) => {
    let locator = unchangedLocator;
    param.forEach(e => {
        locator = locator.replace("?", e);
    });
    return locator;
};

exports.getParameterizedLocator = getParameterizedLocator;
exports.getFixtureFile = getFixtureFile;
exports.fileExistsWithCaseSync = fileExistsWithCaseSync;