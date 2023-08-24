import { StyledHeadline2, StyledParagraph } from "../../styles/tipography";
import { StyledTotalValue } from "./style";

function TotalMoney({ valueInsert }) {
  const value = valueInsert.map((values) => values.value);

  const sum = value.reduce((acc, value) => acc + value, 0);
  const valueBrl = sum.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      {valueInsert.length > 0 ? (
        <StyledTotalValue>
          <StyledHeadline2>Valor total:</StyledHeadline2>
          <span>{valueBrl}</span>
          <StyledParagraph>O valor se refere ao saldo</StyledParagraph>
        </StyledTotalValue>
      ) : (
        <div></div>
      )}
    </>
  );
}
export default TotalMoney;
