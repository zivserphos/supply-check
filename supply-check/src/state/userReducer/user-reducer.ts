import * as workerTypes from "./user-types";

function workerReducer(state: Worker, action: Action) {
  switch (action.type) {
    case workerTypes.ADD_WORKER:
      return { ...action.payload.worker };
    case workerTypes.REMOVE_WORKER:
      return {};
    default:
      return { ...state };
  }
}

export default workerReducer;
