import styled from '@emotion/styled';

import { Label } from 'components/atoms/Label';
import { Button } from 'components/atoms/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

export const ToDoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label label={label} />
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};
