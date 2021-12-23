declare interface EquipmentItem {
  name: string;
  fullQuantity: number;
}

declare interface EquipAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "UPDATE_ITEM";
  payload: {
    itemName?: string;
    item?: EquipmentItem;
  };
}

declare interface MissingItem {
  id: number;
  missing: string;
}

declare interface State {
  equipmentList: EquipmentItem[];
  missingItems: MissingItem[];
}
