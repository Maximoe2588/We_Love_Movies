const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await service.lists();
  res.send({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};