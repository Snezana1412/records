import { data } from "../../public/data";
import { createContext, useEffect, useReducer } from "react";

// CREATE CONTEXT
const recordsContext = createContext(null);

//DEFINE REDUCER
const recordsReducer = (recordsState, action) => {
  const { type, payload } = action;
  const copyOfState = JSON.parse(JSON.stringify(recordsState));
  console.log(payload);
  switch (type) {
    case "FETCH_RECORDS":
      {
        return [...copyOfState, ...payload];
      }
      break;
    case "ADD_RECORD":
      {
      }
      break;
    case "DELETE_RECORD":
      {
      }
      break;
    case "UPDATE_RECORD":
      {
      }
      break;
    default:
      return recordsState;
  }
};

export const RecordsProvider = ({ children }) => {
  //INITIATE REDUCER
  const [recordsState, dispatch] = useReducer(recordsReducer, []);

  //FETCH DATA

  useEffect(() => {
    setTimeout(() => {
      const fetchData = () => {
        dispatch({ type: "FETCH_RECORDS", payload: data });
      };
      fetchData();
    }, 1500);
  }, []);

  return (
    <recordsContext.Provider value={{ recordsState, dispatch }}>
      {children}
    </recordsContext.Provider>
  );
};

export default recordsContext;
