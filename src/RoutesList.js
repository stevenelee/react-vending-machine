import { Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Snack from "./Snack";

/**
 * Component for displaying and navigating to routes
 */
function RoutesList(){
  return(
    <Routes>
      <Route path="/" element={<VendingMachine/>} />
      <Route path="/:snack" element={<Snack/>} />
    </Routes>
  )
}

export default RoutesList;