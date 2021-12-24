import * as equipTypes from "./equip-types";

export const addItem = (item: EquipmentItem, missing: MissingItem) => ({
  type: equipTypes.ADD_ITEM,
  payload: {
    item,
    missing,
  },
});

export const removeItem = (itemName: string): EquipAction => ({
  type: equipTypes.REMOVE_ITEM,
  payload: {
    itemName,
  },
});

export const updateItem = (
  itemName: string,
  currentAmount: number
): EquipAction => ({
  type: equipTypes.UPDATE_ITEM,
  payload: {
    itemName,
    currentAmount,
  },
});

export const sendReport = (missingItems: MissingItem[]): EquipAction => ({
  type: equipTypes.SEND_REPORT,
  payload: {
    missingItems,
  },
});
