import * as workerTypes from "./user-types";

const addWorker = (worker: WorkerInfo, date: string | null) => ({
  type: workerTypes.ADD_WORKER,
  payload: {
    worker,
    date,
  },
});
export default addWorker;
