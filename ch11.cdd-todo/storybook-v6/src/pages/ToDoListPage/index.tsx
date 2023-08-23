import { useContext } from 'react';

import { ToDoListContext } from 'contexts/ToDoList';

import { ToDoList } from 'components/templates/ToDoList';

export const ToDoListPage = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);

  return <ToDoList toDoList={toDoList} onDelete={onDelete} />;
};
