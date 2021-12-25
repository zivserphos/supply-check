export const updatedMissingQuantities = (
  report: MissingItem[],
  state: EquipState
): EquipState => ({ ...state, missingItems: [...report] });

export const addItemToState = (
  item: EquipmentItem,
  missing: MissingItem,
  state: EquipState
): EquipState => {
  const updatedEquipment = [...state.equipmentList, item];
  const updatedMissing = [...state.missingItems, missing];
  return { equipmentList: updatedEquipment, missingItems: updatedMissing };
};
