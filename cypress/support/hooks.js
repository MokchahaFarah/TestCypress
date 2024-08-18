const utils = require("../support/utils.js");
const qs = require("qs");
let scenarioName;
let dataFileContent;

beforeEach(() => {
    scenarioName = processTitle(cy.state().test.title);
    let dataFile = getDataFilePath(scenarioName);
    cy.task("checkIfFileExists", dataFile).then((exists) => {
        if (exists == null) {
            throw new Error(dataFile + " doesn't exist.");
        }

        cy.fixture(utils.getFixtureFile(scenarioName)).then((data) => {
            dataFileContent = data;
        });
    });
    cy.task("clearStorage");
    cy.on("window:confirm", () => {
        return true;
    });
});

afterEach(() => {
    cy.on("window:confirm", () => {
        return true;
    });
});

export { scenarioName, dataFileContent };

const processTitle = (title) => {
    const loweredTitle = title.toLowerCase();
    const pattern = /\(example #[0-9]+\)/g;
    const result = loweredTitle.replace(pattern, "");
    return replaceAll(result, " ", "_") + ".json";
};

const getDataFilePath = (scenarioName) => {
    return "cypress/fixtures/" + utils.getFixtureFile(scenarioName);
};

const replaceAll = (str, match, replacement) => {
    return str.split(match).join(replacement);
};