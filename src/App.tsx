import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { GlobalReset } from "./styles/reset";
import List from "./components/List";
import Summary from "./components/Summary";
import { StyledContainer } from "./styles/container";
import { ITransaction } from "./interfaces";

function App() {
  const [valueInsert, setValueInserts] = useState<ITransaction[]>([]);
  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <StyledContainer>
        <Form valueInsert={valueInsert} setValueInserts={setValueInserts} />
        <List valueInsert={valueInsert} setValueInserts={setValueInserts} />
        <Summary
          valueInsert={valueInsert}
          setValueInserts={setValueInserts}
        />
      </StyledContainer>
    </>
  );
}

export default App;
