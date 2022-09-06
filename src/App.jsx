import React from "react";
import { Route, Routes } from "react-router-dom";

import * as Pages from "./pages";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Pages.Home />}></Route>
        <Route path="createSingleRoom" element={<Pages.CreateSingleRoom />}></Route>
        <Route path="createMultiRoom" element={<Pages.CreateMultiRoom />}></Route>
        <Route path="/category" element={<Pages.Subjects />}></Route>
        <Route path="/waiting" element={<Pages.Waiting />}></Route>
        <Route path="/quiz" element={<Pages.Quiz />}></Route>
        <Route path="/score-single" element={<Pages.ScoreSingle />}></Route>
        <Route path="scoreMulti" element={<Pages.ScoreMulti />}></Route>
        <Route path="*" element={<Pages.NotFound />}></Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
