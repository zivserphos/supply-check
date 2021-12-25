/* eslint-disable no-case-declarations */
import * as actionTypes from "./equip-types";
import db from "../../db/db";
import {
  addItemToState,
  updatedMissingQuantities,
} from "./helpers/stateUpdates";

const INITIAL_STATE: EquipState = {
  equipmentList: db,
  missingItems: db.map((item) => ({
    name: item.name,
    missingQuantity: 0,
  })),
};

const equipmentReducer = (
  // eslint-disable-next-line default-param-last
  state = INITIAL_STATE,
  action: EquipAction
): EquipState => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const { item, missing } = action.payload;
      if (item && missing) return addItemToState(item, missing, state);
      return state;
    case actionTypes.REMOVE_ITEM:
      return state;
    case actionTypes.UPDATE_ITEM:
      return state;
    case actionTypes.SEND_REPORT:
      if (!action.payload.missingItems) return state;
      return updatedMissingQuantities(action.payload.missingItems, state);
    default:
      return state;
  }
};

export default equipmentReducer;
