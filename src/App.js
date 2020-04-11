import React from "react";
import "./App.css";
import NewProductsView from "./views/NewProductsView";
import ProductListView from "./views/ProductListView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header>
            <ul className="link-list">
              <li>
                <Link to={"/"}>Novo</Link>
              </li>
              <li>
                <Link to={"/list"}>Lista</Link>
              </li>
            </ul>
          </header>
        </div>
        <div>
          <Route path={"/"} exact component={NewProductsView} />
          <Route path={"/list"} component={ProductListView} />
        </div>
      </Router>
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
