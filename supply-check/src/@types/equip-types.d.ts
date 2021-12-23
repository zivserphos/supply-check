declare interface EquipmentItem {
  name: string;
  fullQuantity: number;
}

declare interface EquipAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "UPDATE_ITEM";
  payload: {
    itemName?: string;
    item?: validNewItem;
    updatedQuantity?: number;
  };
}

declare interface MissingItem {
  id: number;
  missing: string;
}

declare interface validNewItem {
  itemName: string;
  fullQuantity: number;
  currentQuantity: number;
}

declare interface formInput {
  itemName: string;
  fullQuantity: string;
  currentQuantitu: string;
}

declare interface State {
  equipmentList: EquipmentItem[];
  missingItems: MissingItem[];
}
