import { Command } from 'commander';

import { getJson } from './utils';

const packageJson = getJson('../../package.json', true);

const program = new Command();

program.name(packageJson.name).description(packageJson.description).version(packageJson.version);

program
  .command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
