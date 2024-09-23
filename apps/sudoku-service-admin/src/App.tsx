import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { LeaderboardList } from "./leaderboard/LeaderboardList";
import { LeaderboardCreate } from "./leaderboard/LeaderboardCreate";
import { LeaderboardEdit } from "./leaderboard/LeaderboardEdit";
import { LeaderboardShow } from "./leaderboard/LeaderboardShow";
import { SudokuGameList } from "./sudokuGame/SudokuGameList";
import { SudokuGameCreate } from "./sudokuGame/SudokuGameCreate";
import { SudokuGameEdit } from "./sudokuGame/SudokuGameEdit";
import { SudokuGameShow } from "./sudokuGame/SudokuGameShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SudokuService-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Leaderboard"
          list={LeaderboardList}
          edit={LeaderboardEdit}
          create={LeaderboardCreate}
          show={LeaderboardShow}
        />
        <Resource
          name="SudokuGame"
          list={SudokuGameList}
          edit={SudokuGameEdit}
          create={SudokuGameCreate}
          show={SudokuGameShow}
        />
      </Admin>
    </div>
  );
};

export default App;
