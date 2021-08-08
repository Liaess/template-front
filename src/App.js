import { Route, Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {

  return (
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <Route path="/"/>
        </Switch>
      </BrowserRouter>
  )
}

export default App;