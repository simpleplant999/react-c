import { useContext } from "react";
import { AppContext } from "../../App";
import { useToggle } from "../../hooks/useToggle";

function Home() {
  const { username } = useContext(AppContext);
  const [isVisible, toggle] = useToggle();
  return (
    <div>
      {/* USE CONTEXT */}
      {/* <h4>HOME PAGE USERNAME: {username}</h4> */}

      {/* USE CUSTOM HOOK */}
      <button className="btn btn-primary" onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h4>Lorem ipsum dolor sit amet.</h4>}
    </div>
  );
}

export default Home;
