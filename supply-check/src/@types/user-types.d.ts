declare interface WorkerInfo {
  name: string | null;
  workPlace: string | null;
  id?: string;
}
declare interface WorkerAction {
  type: string;
  payload: { worker: Worker; date: string };
}

declare interface WorkerState {
  worker: WorkerInfo | null;
  date: string | null;
}
