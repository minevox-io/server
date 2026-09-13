import fs from 'fs';
import * as yaml from 'js-yaml';

console.log("Starting Minevox server version 1.0.0");

// EULA check
if (!fs.existsSync("eula.txt")) {
    fs.writeFileSync("eula.txt", "# By setting eula=true you agree to the Minevox EULA\n# https://minevox.github.io/eula\neula=false\n");
    console.error("You need to agree to the EULA in order to run the server. Edit eula.txt and set eula=true.");
    process.exit(1);
}
const eula = fs.readFileSync("eula.txt", "utf8");
if (!eula.includes("eula=true")) {
    console.error("You must agree to the EULA. Edit eula.txt and set eula=true.");
    process.exit(1);
}

// Load config.yaml
let config = {};
try {
    config = yaml.load(fs.readFileSync("config.yaml", "utf8"));
    console.log("Loading configuration...");
    console.log(`Server Name: ${config.serverName}`);
    console.log(`IP: ${config.serverIP} Port: ${config.serverPort}`);
    console.log(`Max Players: ${config.maxPlayers}`);
} catch (err) {
    console.error("Failed to load config.yaml:", err);
    process.exit(1);
}

// World init
console.log(`Preparing level "${config.worldName || "world"}"...`);

// Simulate startup delay
setTimeout(() => {
    console.log("Done! For help, type \"help\"");
    // Here you’d start your networking loop, tick scheduler, etc.
}, 3000);
