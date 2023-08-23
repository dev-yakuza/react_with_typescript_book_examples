import styled from '@emotion/styled';

const Input = styled.input`
  font-size: 1.2rem;
`;

interface Props {
  readonly value: string;
  readonly onChange: (text: string) => void;
}

export const InputText = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={(event) => onChange(event.target.value)} />;
};
