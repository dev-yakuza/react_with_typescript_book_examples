import styled from '@emotion/styled';
import { DataView } from 'components/DataView';
import { InputContainer } from 'components/InputContainer';
import { ToDoListContextProvider } from 'contexts/ToDoList';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <InputContainer />
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
