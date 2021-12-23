import * as equipTypes from "./equip-types";

export const addItem = (item: EquipmentItem) => ({
  type: equipTypes.ADD_ITEM,
  payload: {
    item,
  },
});

export const removeItem = (itemId: number) => ({
  type: equipTypes.REMOVE_ITEM,
  payload: {
    itemId,
  },
});

export const updateItem = (item: EquipmentItem) => ({
  type: equipTypes.UPDATE_ITEM,
  payload: {
    item,
  },
});
