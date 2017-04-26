'use babel';

import Mustache from 'mustache';
import path from 'path';
import fs from 'fs';


const generateSnippets = () => {
  generateES5Snippet();
  generateES6Snippet();
}

const generateES5Snippet = () => {
  const templateFile = path.resolve(__dirname, 'templates/snippets.cson.mst');
  const outputFile = path.resolve(__dirname, '../snippets/snippets.cson');

  generateSnippet(templateFile, outputFile);
}

const generateES6Snippet = () => {
  const templateFile = path.resolve(__dirname, 'templates/snippets-es6.cson.mst');
  const outputFile = path.resolve(__dirname, '../snippets/snippets-es6.cson');

  generateSnippet(templateFile, outputFile);
}

const generateSnippet = (templateFile, outputFile) => {
  const templateData = fs.readFileSync(templateFile, 'utf-8');
  const templateVariables = collectTemplateVariables();
  const output = Mustache.render(templateData, templateVariables);

  fs.writeFile(outputFile, output);
}

const collectTemplateVariables = () => {
  const variables = {};
  if (atom.config.get('atom-mocha-snippets.toggleDoubleQuotes')) {
    variables.quoteDelimiter = '\"';
  }
  if (!atom.config.get('atom-mocha-snippets.toggleDoubleQuotes')) {
    variables.quoteDelimiter = '\'';
  }
  if (atom.config.get('atom-mocha-snippets.toggleSemicolons')) {
    variables.expressionTerminator = ';';
  } else {
    variables.expressionTerminator = '';
  }

  return variables;
}

export default generateSnippets;
