/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = function(answers) {
  var componentName = answers.name;
  var exportString = `export { default as ${componentName} } from './${componentName}; \n`;
  var indexPath = path.join(process.env.PWD, 'app/components/index.js');
  fs.appendFileSync(indexPath, exportString);

  return chalk.white(`add export ${componentName} to components/index.js`);
};
