import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";
import InfoMessage from "./components/InfoMessage.jsx";

const INITIAL_INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {userInput.duration < 1 ? (
        <InfoMessage />
      ) : (
        <Result userInput={userInput} />
      )}
    </main>
  );
}

export default App;
