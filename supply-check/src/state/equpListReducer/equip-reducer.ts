import * as actionTypes from "./equip-types";
import db from "../../db/db";

const INITIAL_STATE: InitialState = {
  equipmentList: db,
  missingItems: [],
};

const equipmentReducer = (action: EquipAction, state = INITIAL_STATE) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      break;
    case actionTypes.REMOVE_ITEM:
      break;
    case actionTypes.UPDATE_ITEM:
      break;
    default:
      break;
  }
};

export default equipmentReducer;
