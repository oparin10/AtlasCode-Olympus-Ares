import React from "react";
import { useDispatch } from "react-redux";
import Markdown from "./components/Widgets/Markdown";
import { configurationSetup } from "./redux/store/configuration/actions";

function App() {
  const dispatch = useDispatch();

  const initializeConfigurationRedux = () => {
    dispatch(configurationSetup());
  };

  React.useEffect(() => {
    initializeConfigurationRedux();
  }, []);

  return (
    <div>
      <Markdown />

      <button onClick={initializeConfigurationRedux}>haha</button>
    </div>
  );
}

export default App;
