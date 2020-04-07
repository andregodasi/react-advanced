import React from "react";
import "./App.css";
import NewProductsView from "./views/NewProductsView";
import ProductListView from "./views/ProductListView";

function App() {
  return (
    <div className="App">
      <NewProductsView />
      <ProductListView />
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
