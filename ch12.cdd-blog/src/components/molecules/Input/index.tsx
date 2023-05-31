import styled from '@emotion/styled';

import { Label } from 'components/atoms/Label';
import { InputText } from 'components/atoms/InputText';

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

interface Props {
  readonly label: string;
  readonly value: string;
  readonly onChange: (text: string) => void;
}

export const Input = ({ label, value, onChange }: Props) => {
  return (
    <InputGroup>
      <Label text={label} />
      <InputText value={value} onChange={onChange} />
    </InputGroup>
  );
};
