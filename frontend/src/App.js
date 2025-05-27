import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
   <>

    <Header>
      <main style={{padding: 'irem'}}>
        <Outlet/>
      </main>
    </Header>
   </>
  );
}

export default App;
