import { Link } from "react-router-dom";

const DEFAULT_SNACKS = ["chips", "candy", "cookies"];


/**
 * Component for vending machine
 *
 * Props:
 * - snacks: array of string of snacks
 *
 * @param {Object} param0
 */
function VendingMachine({ snacks = DEFAULT_SNACKS }) {

  return (
    <nav className="VendingMachine">
      {snacks.map(snack =>
        <Link
          key={snack}
          to={`/${snack}`}>{snack}
          <br></br>
        </Link>
        )}
    </nav>
  );
}

export default VendingMachine;