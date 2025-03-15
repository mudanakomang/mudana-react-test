const path = require("path");

module.exports = {
  resolve: {
    // Alias to src
    components: path.resolve(__dirname, "src/components"),
    pages: path.resolve(__dirname, "src/pages"),
    types: path.resolve(__dirname, "src/types"),
    props: path.resolve(__dirname, "src/props"),
    extensions: [".ts", ".tsx", ".js", ".jsx"],    
  }
};
