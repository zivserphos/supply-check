import * as equipTypes from "./equip-types";

export const addItem = (item: EquipmentItem) => ({
  type: equipTypes.ADD_ITEM,
  payload: {
    item,
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

export const sendReport = (report: EquipmentItem[]): EquipAction => ({
  type: equipTypes.SEND_REPORT,
  payload: {
    report,
  },
});
