const path = require("path");

exports.createRequest = (request, response) => {
  response.render(path.join(__dirname, "..", "views/chat/index.hbs"));
};
