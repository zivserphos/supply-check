/* eslint-disable no-case-declarations */
import * as actionTypes from "./equip-types";
import db from "../../db/db";

const INITIAL_STATE: State = {
  equipmentList: db,
  missingItems: db.map((item) => ({
    name: item.name,
    missingQuantity: 0,
  })),
};

const updatedMissingQuantities = (
  report: MissingItem[],
  state: State
): State => ({ ...state, missingItems: [...report] });

const equipmentReducer = (
  // eslint-disable-next-line default-param-last
  state = INITIAL_STATE,
  action: EquipAction
): State => {
  console.log("here at update items");
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const updatedEquipment = [...state.equipmentList];
      const updatedMissing = [...state.missingItems];
      if (action.payload.item && action.payload.missing) {
        updatedEquipment.push(action.payload.item);
        updatedMissing.push(action.payload.missing);
      }
      return { equipmentList: updatedEquipment, missingItems: updatedMissing };
    case actionTypes.REMOVE_ITEM:
      return state;
    case actionTypes.UPDATE_ITEM:
      return state;
    case actionTypes.SEND_REPORT:
      if (!action.payload.missingItems) return state;
      return updatedMissingQuantities(action.payload.missingItems, state);
    default:
      console.log("default");
      return state;
  }
};

export default equipmentReducer;
