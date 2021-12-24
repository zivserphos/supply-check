import * as workerTypes from "./user-types";

const addWorker = (worker: Worker) => ({
  type: workerTypes.ADD_WORKER,
  payload: {
    worker,
  },
});
export default addWorker;
