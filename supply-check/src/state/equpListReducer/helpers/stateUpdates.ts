export const updatedMissingQuantities = (
  report: EquipmentItem[],
  state: EquipState
): EquipState => ({ ...state, equipmentList: [...report] });

export const addItemToState = (
  item: EquipmentItem,
  state: EquipState
): EquipState => {
  const updatedEquipment = [...state.equipmentList, item];
  return { equipmentList: updatedEquipment };
};
