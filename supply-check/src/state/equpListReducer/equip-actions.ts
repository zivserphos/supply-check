import * as equipTypes from "./equip-types";

export const addItem = (item: validNewItem): EquipAction => ({
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
  updatedQuantity: number
): EquipAction => ({
  type: equipTypes.UPDATE_ITEM,
  payload: {
    itemName,
    updatedQuantity,
  },
});
