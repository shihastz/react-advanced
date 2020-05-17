//Advanced
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RefsDemo from "./componenet/advanced/RefsDemo";
import PortalsDemo from "./componenet/advanced/PortalsDemo";
import ErrorDemo from "./componenet/advanced/ErrorDemo";
import ErrorBoundary from "./componenet/advanced/ErrorBoundary";
import ClickCounter from "./componenet/advanced/hoc/ClickCounter";
import HoverCounter from "./componenet/advanced/hoc/HoverCounter";
import RenderCounter from "./componenet/advanced/renderProps/RenderCounter";
import RenderClickCounter from "./componenet/advanced/renderProps/RenderClickCounter";
import RenderHoverCounter from "./componenet/advanced/renderProps/RenderHoverCounter";
import ComponentC from "./componenet/advanced/context/ComponentC";
import { UserProvider } from "./componenet/advanced/context/userContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <RenderCounter
          render={(count, incrementcount) => (
            <RenderClickCounter count={count} incrementcount={incrementcount} />
          )}
        />
        <RenderCounter
          render={(count, incrementcount) => (
            <RenderHoverCounter count={count} incrementcount={incrementcount} />
          )}
        />
        <hr />
        <br />
        <ClickCounter numb="55" />
        <HoverCounter />
        <hr />
        <br />
        <ErrorBoundary>
          <ErrorDemo name="superman" />
          {/* <ErrorDemo name="joker" /> */}
        </ErrorBoundary>

        <hr />
        <RefsDemo />
        <PortalsDemo />
        <hr/>
        <br />
        <UserProvider value="shihas">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}

export default App;