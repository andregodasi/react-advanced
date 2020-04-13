import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

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
      <div>
        <FormattedMessage
          id="app.clicks"
          description="quantidade de cliques"
          values={{ totalClicks: totalClicks }}
          defaultMessage={`
          Olá, você tem {totalClicks, plural, 
            =0 {Nenhum Clique}
            one {# clique}
            other {# Cliques}
          }`}
        />
      </div>
      <div>
        <FormattedMessage
          id="app.select"
          description="quantidade de cliques"
          values={{ totalClicks: totalClicks }}
          defaultMessage={`
          Olá, você tem {totalClicks, plural, 
            =0 {Nenhum Clique}
            one {# clique}
            other {# Cliques}
          }`}
        />
      </div>
    </div>
  );
}
