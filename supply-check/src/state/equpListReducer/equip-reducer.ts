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
  console.log("here at update items");
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const { newItem } = action.payload;
      const updatedEquipment = [...state.equipmentList];
      const newItem = { name: action.payload.itemName, fullQu };
      return state;
    case actionTypes.REMOVE_ITEM:
      return state;
    case actionTypes.UPDATE_ITEM:
      // const updatedList = [...state.equipmentList];
      // if (action.payload.item) updatedList.push(action.payload.item);
      return state;
    default:
      return state;
  }
};

export default equipmentReducer;
