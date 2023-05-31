import { useState } from 'react';
import { ToDoInput } from 'components/ToDoInput';
import { ShowInputButton } from 'components/ShowInputButton';

export const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
};
