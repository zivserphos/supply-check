declare interface EquipmentItem {
  name: string;
  fullQuantity: number;
  missingQuantity: number;
}

declare interface CombineState {
  equipmentReducer: EquipState;
  workerReducer: WorkerState;
}

declare interface EquipState {
  equipmentList: EquipmentItem[];
}

declare interface EquipAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "UPDATE_ITEM" | "SEND_REPORT";
  payload: {
    itemName?: string;
    item?: EquipmentItem;
    currentAmount?: number;
    report?: EquipmentItem[];
  };
}

declare interface SomeInterface {
  a: number;
}
