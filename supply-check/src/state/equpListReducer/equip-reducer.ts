/* eslint-disable no-case-declarations */
import * as actionTypes from "./equip-types";
import db from "../../db/db";
import {
  addItemToState,
  updatedMissingQuantities,
} from "./helpers/stateUpdates";

const INITIAL_STATE: EquipState = {
  equipmentList: db.map((item) => ({ ...item, missingQuantity: 0 })),
};

const equipmentReducer = (
  // eslint-disable-next-line default-param-last
  state = INITIAL_STATE,
  action: EquipAction
): EquipState => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const { item } = action.payload;
      if (item) return addItemToState(item, state);
      return state;
    case actionTypes.REMOVE_ITEM:
      return state;
    case actionTypes.UPDATE_ITEM:
      return state;
    case actionTypes.SEND_REPORT:
      if (!action.payload.report) return state;
      return updatedMissingQuantities(action.payload.report, state);
    default:
      return state;
  }
};

export default equipmentReducer;
