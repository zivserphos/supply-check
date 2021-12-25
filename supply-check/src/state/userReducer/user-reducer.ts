/* eslint-disable default-param-last */
import * as workerTypes from "./user-types";

const INITIAL_STATE: WorkerState = {
  worker: null,
  date: null,
};
function workerReducer(state: WorkerState = INITIAL_STATE, action: Action) {
  console.log("worker reducer");
  switch (action.type) {
    case workerTypes.ADD_WORKER:
      return { worker: action.payload.worker, date: action.payload.date };
    case workerTypes.REMOVE_WORKER:
      return {};
    default:
      return { ...state };
  }
}

export default workerReducer;
