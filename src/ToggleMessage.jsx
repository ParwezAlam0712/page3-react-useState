import { useState } from "react";

function ToggleMessage() {

  const [visible, setVisible] = useState(false);

  function toggleMessage() {
    setVisible(!visible);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <button onClick={toggleMessage}>
        {visible ? "Hide Message" : "Show Message"}
      </button>

      {visible && (
        <p>Hello, welcome!</p>
      )}

    </div>
  );
}

export default ToggleMessage;
