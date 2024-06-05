import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cart from "./components/Cart";
import User from "./components/User";
import RecordList from "./components/RecordList";
import RecordDetails from "./components/RecordDetails";
import { RecordsProvider } from "./contexts/recordsContext";
function App() {
  return (
    <>
      <RecordsProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='records' element={<RecordList />} />
            {/* <Route path='records/:id' element={<RecordDetails />} />
            <Route path='records/add' element={<RecordDetails />} /> */}

            <Route path='/cart' element={<Cart />} />
            <Route path='/user' element={<User />} />
          </Route>
        </Routes>
      </RecordsProvider>
    </>
  );
}

export default App;
