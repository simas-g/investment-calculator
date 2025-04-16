import Header from "./components/Header"
import Calculator from "./components/Calculator"
import Results from "./components/Results"
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <div>
      <Header/>
      <Calculator setData={setData} data={data}/>
      <Results data={data}/>
    </div>
  )
}

export default App
