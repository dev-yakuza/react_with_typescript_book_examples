import styled from '@emotion/styled';

const TextInput = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

interface Props {
  readonly value: string;
  readonly onChange: (text: string) => void;
}

export const Input = ({ value, onChange }: Props) => {
  return <TextInput value={value} onChange={(event) => onChange(event.target.value)} />;
};
