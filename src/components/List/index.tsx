import { StyledHeadline1, StyledHeadline2 } from '../../styles/tipography';
import Card from '../Card';
import { StyledContainerList, StyledList } from './style';
import { IFormProps } from '../../interfaces';

function List({ valueInsert, setValueInserts }: IFormProps) {
  return (
    <StyledContainerList>
      <StyledHeadline2>Resumo financeiro</StyledHeadline2>
      <StyledList>
        {valueInsert.length > 0 ? (
          <Card valueInsert={valueInsert} setValueInserts={setValueInserts} />
        ) : (
          <StyledHeadline1>
            Você ainda não possui nenhum lançamento
          </StyledHeadline1>
        )}
      </StyledList>
    </StyledContainerList>
  );
}

export default List;
