/* eslint-disable no-case-declarations */
import * as actionTypes from "./equip-types";
import db from "../../db/db";

const INITIAL_STATE: State = {
  equipmentList: db,
  missingItems: [],
};

const equipmentReducer = (
  // eslint-disable-next-line default-param-last
  state = INITIAL_STATE,
  action: EquipAction
): State => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return state;
    case actionTypes.REMOVE_ITEM:
      return state;
    case actionTypes.UPDATE_ITEM:
      const updatedList = [...state.equipmentList];
      if (action.payload.item) updatedList.push(action.payload.item);
      return { ...state, equipmentList: updatedList };
    default:
      return state;
  }
};

export default equipmentReducer;
