import { v4 as uuidv4 } from "uuid";

const recordsReducer = (recordsState, action) => {
  const { type, payload } = action;
  const copyOfState = JSON.parse(JSON.stringify(recordsState));
  switch (type) {
    case "ADD_RECORD": {
      return [...copyOfState, { ...payload, _id: uuidv4() }];
    }
    case "FETCH_RECORDS": {
      let recordsRecieved = payload;

      /* localStorage.setItem('localRecords', JSON.stringify(recordsRecieved)); */
      return [...copyOfState, ...recordsRecieved];
    }

    case "DELETE_RECORD": {
      console.log(payload);
      return copyOfState.filter((record) => record._id != payload);
    }

    case "UPDATE_RECORD": {
      console.log(payload);

      let recordsCopy = copyOfState.map((record) => {
        if (record._id == payload._id) {
          return payload;
        }
        return record;
      });
      return [...recordsCopy];
    }

    default:
      return recordsState;
  }
};
export default recordsReducer;
