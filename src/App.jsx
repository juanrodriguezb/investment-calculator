import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const DEFAULT_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {

  const [userInput, setUserInput] = useState(DEFAULT_INPUT);

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
}

const validInput = userInput.duration >=1;

  return (
    <main>
      <Header 
        headerLabel={'Investment Calculator'}
      />
      <UserInput
        userInput={userInput}
        onChange={handleChange}/>
      {!validInput && <p className="center">Please enter a valid Duration value.</p>}
      { validInput && <Results userInput={userInput}/>}
    </main>
  );
}

export default App;
