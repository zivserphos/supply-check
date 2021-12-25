declare interface WorkerInfo {
  name: string | null;
  workPlace: string | null;
  id?: string;
}
declare interface Action {
  type: string;
  payload: { worker: Worker; date: string };
}

declare interface WorkerContextInterface {
  state: Worker;
  dispatch: Dispatch<Action>;
}

declare interface WorkerState {
  worker: WorkerInfo | null;
  date: string | null;
}
