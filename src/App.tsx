import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Markdown from "./components/Widgets/Markdown";
import { configurationSetup } from "./redux/configuration/actions";
import { changeContentField } from "./redux/contentEntry/actions";
import { setLoadingTrue } from "./redux/globalUI/actions";
import { Map, List } from "immutable";
import { Content } from "./redux/types";
import Loading from "./components/App/Loading";

function App() {
  const dispatch = useDispatch();

  const loadingState = useSelector((state: RootStateOrAny) => state.globalUI);

  const configState: Map<string, Content> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  const setContent = (e: any) => {
    dispatch(changeContentField(e.target.value));
    console.log(configState.toJS());
  };


  return (
    <div>
      <Loading isLoading={loadingState.isLoading} />

      <button onClick={() => dispatch(configurationSetup())}>haha</button>

      <input onChange={(e) => setContent(e)} type="text" name="input" id="" />
    </div>
  );
}

export default App;
