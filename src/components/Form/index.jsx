import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
import Input from "./Input/index";
import Select from "./Select";
import { StyledLabel, StyledSpan } from "../../styles/tipography";
import { StyledForm } from "./style";

function Form({ valueInsert, setValueInserts }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleValueChange(event) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9.,]/g, "").replace(",", ".");
    setValue(numericValue);
  }

  function handleTypeChange(event) {
    setType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const transaction = {
      id: uuidv4(),
      description,
      value: type === "entrada" ? Number(value) : -Number(value),
      type,
    };

    setValueInserts([...valueInsert, transaction]);
    setDescription("");
    setValue("");
    setType("");
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Descrição</StyledLabel>
        <Input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Digite aqui sua descrição"
        />
        <StyledSpan>Ex: compras de roupas</StyledSpan>

        <StyledLabel>Valor (R$)</StyledLabel>
        <Input
          type="text"
          id="value"
          value={value}
          onChange={handleValueChange}
          placeholder="1"
        />
        <StyledLabel>Tipo de valor</StyledLabel>
        <Select value={type} onChange={handleTypeChange} />

        <Button type="submit">Inserir valor</Button>
      </StyledForm>
    </>
  );
}

export default Form;
