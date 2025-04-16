import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = data.duration >= 1;
  return (
    <div>
      <Header />
      <Calculator setData={setData} data={data} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results data={data} />}
    </div>
  );
}

export default App;
