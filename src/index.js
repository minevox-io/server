import fs from 'fs';
import * as yaml from 'js-yaml';
import chalk from 'chalk';

console.log(chalk.white("Starting Minevox server version 1.0.0"));

// EULA check
if (!fs.existsSync("eula.txt")) {
    fs.writeFileSync("eula.txt", "# By setting eula=true you agree to the Minevox EULA\n# https://minevox.github.io/eula\neula=false\n");
    console.error(chalk.red.bold("You need to agree to the EULA in order to run the server. Edit eula.txt and set eula=true."));
    process.exit(1);
}
const eula = fs.readFileSync("eula.txt", "utf8");
if (!eula.includes("eula=true")) {
    console.error(chalk.red.bold("You must agree to the EULA. Edit eula.txt and set eula=true."));
    process.exit(1);
}

console.log(chalk.green("EULA accepted. Continuing startup..."));

// Load config.yaml
let config = {};
try {
    config = yaml.load(fs.readFileSync("config.yaml", "utf8"));
    console.log(chalk.cyan("Loading configuration..."));
    console.log(chalk.white(`Server Name: ${config.serverName}`));
    console.log(chalk.white(`IP: ${config.serverIP} Port: ${config.serverPort}`));
    console.log(chalk.white(`Max Players: ${config.maxPlayers}`));
} catch (err) {
    console.error(chalk.red.bold("Failed to load config.yaml:"), err);
    process.exit(1);
}

// World init
console.log(chalk.cyan(`Preparing level "${config.worldName || "world"}"...`));

// Simulate startup delay
setTimeout(() => {
    console.log(chalk.green.bold("Done! For help, type \"help\""));
}, 3000);
