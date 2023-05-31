import { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { ToDoListContext } from 'contexts/ToDoList';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputToDo = () => {
  const [toDo, setToDo] = useState('');
  const { onAdd } = useContext(ToDoListContext);
  const navigate = useNavigate();

  const onAddTodo = () => {
    if (toDo === '') return;

    onAdd(toDo);
    setToDo('');
    navigate('/');
  };

  return (
    <Container>
      <Input value={toDo} onChange={setToDo} />
      <Button label="추가" color="#304FFE" onClick={onAddTodo} />
    </Container>
  );
};
