import React, { Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import messages from "./i18n/messages";

const NewProductsView = React.lazy(() => import("./views/NewProductsView"));
const ProductListView = React.lazy(() => import("./views/ProductListView"));

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("lang") || "pt"
  );

  function changeLanguage(lang) {
    console.log(lang);
    localStorage.setItem("lang", lang);
    setCurrentLanguage(lang);
  }
  return (
    <div className="App">
      <IntlProvider
        locale={currentLanguage}
        messages={messages[currentLanguage]}
      >
        <Router>
          <div>
            <header>
              <ul className="link-list">
                <li>
                  <Link to={"/"}>
                    <FormattedMessage defaultMessage="New" id="menu.new" />
                  </Link>
                </li>
                <li>
                  <Link to={"/list"}>
                    <FormattedMessage defaultMessage="List" id="menu.list" />
                  </Link>
                </li>
              </ul>
              <ul className="lang-list">
                <li>
                  <button onClick={() => changeLanguage("pt")}>
                    Português
                  </button>
                </li>
                <li>
                  <button onClick={() => changeLanguage("en")}>English</button>
                </li>
              </ul>
            </header>
          </div>
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Route
                path={"/"}
                exact
                component={(props) => <NewProductsView {...props} />}
              />
              <Route
                path={"/list"}
                component={(props) => <ProductListView {...props} />}
              />
            </Suspense>
          </div>
        </Router>
      </IntlProvider>
    </div>
  );
}

export default App;

/* animate list */
/* function App() {
  const [list, setList] = useState([]);

  const add = () => {
    setList([...list, { id: Date.now() }]);
  };

  const remove = () => {
    if (list.length) {
      list.splice(0, 1);
      setList([...list]);
    }
  };
  return (
    <div>
      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>

      <TransitionGroup>
        {list.map((item) => (
          <CSSTransition
            key={item.id}
            classNames={{ enter: "entrando", exitActive: "saindo" }}
            timeout={300}
          >
            <div className={`btn`}>{item.id}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
} */
