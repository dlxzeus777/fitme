import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [billing, setBilling] = useState(false);

  const onChange = () =>
  {
    setBilling(prevBilling => !prevBilling)
    console.log(billing)
  }
  return (
    <>
    <Header />
    <Main billing={billing} onChange={onChange}/>
    </>
  );
}

export default App;
