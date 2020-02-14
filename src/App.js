import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediumCard from "./components/mediumcard";
import Footer from "./components/footer";
import { Provider } from "react-redux";
import store from "./store";
import FormDialog from "./components/form";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MediumCard />
        <Footer />
        <FormDialog />
      </div>
    </Provider>
  );
}

export default App;
