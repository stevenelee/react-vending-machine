import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/**
 * Component for Snack
 */
function Snack(){
  const params = useParams();

  return (
    <div>
      <p>{params.snack}</p>
      <Link to="/">View Snacks</Link>
    </div>
  )
}

export default Snack;