import ProductsList from "./components/ProductsList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  
  return (

    <Provider store={store}>
      <div className="App">
        <h1>INICIO</h1>
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;
