import { ICardProps } from "../../interfaces";
import { StyledHeadline2, StyledParagraph } from "../../styles/tipography";
import Button from "../Form/Button";
import { StyledCard } from "./style";

function Card({ valueInsert, setValueInserts }: ICardProps) {
  const removeValueList = (id: number | string) => {
    if (window.confirm("Você deseja mesmo excluir esse valor?")) {
      setValueInserts((valueInsert) =>
        valueInsert.filter((value) => value.id !== id)
      );
    }
  };

  function cardClass(type: string) {
    return type === "entrada" ? "green" : "grey";
  }

  function typeText(type: string) {
    return type === "entrada" ? "Entrada" : "Despesa";
  }

  return (
    <>
      {valueInsert.map((transaction) => (
        <StyledCard
          key={transaction.id}
          className={cardClass(transaction.type)}
        >
          <div className="content__text">
            <StyledHeadline2>{transaction.description}</StyledHeadline2>
            <StyledParagraph>{typeText(transaction.type)}</StyledParagraph>
          </div>
          <div className="content__value">
            <StyledParagraph>
              {Math.abs(transaction.value).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </StyledParagraph>
            <Button onClick={() => removeValueList(transaction.id)}>
              Excluir
            </Button>
          </div>
        </StyledCard>
      ))}
    </>
  );
}
export default Card;
