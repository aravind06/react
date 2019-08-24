import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import SearchPage from "./component/searchPage";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
   
    return (
      <Provider store={store}>
      <SearchPage/>
      </Provider>
    );
}

export default App;
