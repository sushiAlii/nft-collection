import "./App.css";
import { MainContent } from "./components/MainContent.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { useState } from "react";

function App() {
  const [currentAccount, setCurrentAccount] = useState();

  return (
    <div className="App">
      <Navbar
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      />
      <MainContent />
    </div>
  );
}

export default App;
