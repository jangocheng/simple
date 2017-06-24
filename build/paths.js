var path = require("path");

module.exports = {
    complie: {
        source: path.join(__dirname, "../src/index.js"),
        dest: path.join(__dirname, "../dest/simple.js")
    }
}