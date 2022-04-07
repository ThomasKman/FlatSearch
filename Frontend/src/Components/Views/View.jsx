import React from "react";

import MainView from "./Main/MainView";
import SearchView from "./Search/Search";

const View = (props) => {
  return (
    <>
      {props.view === "main" && <MainView />}
      {props.view === "search" && <SearchView />}
    </>
  );
};

export default View;
