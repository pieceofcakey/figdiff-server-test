const { workerData } = require("worker_threads");
const path = require("path");

require("ts-node").register();
require(path.resolve(__dirname, workerData.path));
