/**
 * @license
 * Copyright @tajpouria. All Rights Reserved.
 *
 * Use of this source code is governed by MIT license.
 * http://findpouria.netlify.com
 */

const path = require("path");
const shell = require("shelljs");

shell.mkdir("-p", "lib");

shell
    .find("./src")
    .filter(function(file) {
        return file.match(/(\.css?$|\.eot?$|\.ijmap?$|\.svg?$|\.ttf?$|\.woff?$|\.woff2?$)/i);
    })
    .forEach(function(file) {
        const folderPath = path.dirname(file);
        const destPath = folderPath.replace("src/", "lib/");

        console.log(file);

        shell.mkdir("-p", destPath);
        shell.cp("-R", file, destPath);
    });
