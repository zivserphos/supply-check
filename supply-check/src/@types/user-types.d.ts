declare interface Worker {
  name: string;
  workPlace: string;
  date: string;
  id?: string;
}
declare interface Action {
  type: string;
  payload: { worker: Worker };
}

declare interface WorkerContextInterface {
  state: Worker;
  dispatch: Dispatch<Action>;
}
