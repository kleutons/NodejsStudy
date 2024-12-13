import chalk from 'chalk';
import logSymbols from 'log-symbols'


console.log(chalk.blue.bgGreen.italic('Hello world!'));

console.log(logSymbols.success, "servidor iniciado com sucesso");
console.log(logSymbols.error, chalk.red.italic("servidor com problema"));
