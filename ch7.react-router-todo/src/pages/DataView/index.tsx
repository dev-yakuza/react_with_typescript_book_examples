import styled from '@emotion/styled';
import { Title } from 'components/Title';
import { ToDoList } from 'components/ToDoList';
import { ShowInputButton } from 'components/ShowInputButton';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

export const DataView = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title label="할 일 목록" />
      <ToDoList />
      <ShowInputButton show={false} onClick={() => navigate('/add')} />
    </Container>
  );
};
