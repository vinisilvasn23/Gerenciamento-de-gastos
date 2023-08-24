import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { GlobalReset } from "./styles/reset";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import { StyledContainer } from "./styles/container";

function App() {
  const [valueInsert, setValueInserts] = useState([]);
  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <StyledContainer>
        <Form valueInsert={valueInsert} setValueInserts={setValueInserts} />
        <List valueInsert={valueInsert} setValueInserts={setValueInserts} />
        <TotalMoney
          valueInsert={valueInsert}
          setValueInserts={setValueInserts}
        />
      </StyledContainer>
    </>
  );
}

export default App;
