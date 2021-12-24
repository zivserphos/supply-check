declare interface EquipmentItem {
  name: string;
  fullQuantity: number;
}

declare interface State {
  equipmentList: EquipmentItem[];
  missingItems: MissingItem[];
}

declare interface EquipAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "UPDATE_ITEM" | "SEND_REPORT";
  payload: {
    itemName?: string;
    item?: EquipmentItem;
    currentAmount?: number;
    missing?: MissingItem;
    missingItems?: MissingItem[];
  };
}

declare interface MissingItem {
  name: string;
  missingQuantity: number;
}

declare interface validNewItem {
  itemName: string;
  fullQuantity: number;
  currentQuantity: number;
}
