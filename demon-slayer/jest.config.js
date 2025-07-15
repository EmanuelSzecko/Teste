module.exports = {
  testEnvironment: "jsdom", // necessário para testes DOM
  coverageDirectory: "coverage", // onde salva o relatório
  collectCoverageFrom: ["src/**/*.js"], // onde o Jest deve calcular cobertura
};
