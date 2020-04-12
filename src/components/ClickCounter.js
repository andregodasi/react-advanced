import React, { useState } from "react";

export default function ClickCounter() {
  const [totalClicks, setTotalClicks] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  function onChangeIsCkecked() {
    setIsChecked((isCk) => !isCk);
    setTotalClicks((total) => total + 1);
  }
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={onChangeIsCkecked} />
      <div id="checkStatus">{isChecked ? "ON" : "OFF"}</div>
      <div>
        Clicks: <strong>{totalClicks}</strong>
      </div>
    </div>
  );
}
