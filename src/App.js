import React, { Component } from "react";
import { Home, Quiz, Results } from "./screens";
import "./App.css";
import { store } from "./redux";
import { Provider } from "react-redux";
import { Grommet } from "grommet";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// TODO: seperate this into its own file
const theme = {
  global: {
    colors: {
      "light-2": "#f5f5f5",
      text: {
        light: "rgba(0, 0, 0, 0.87)"
      }
    },
    edgeSize: {
      small: "14px"
    },
    elevation: {
      light: {
        medium:
          "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      }
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/quiz" component={Quiz} />
              <Route path="/results" component={Results} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </Grommet>
    );
  }
}

export default App;
