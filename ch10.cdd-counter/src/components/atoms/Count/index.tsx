import styled from '@emotion/styled';

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

interface Props {
  readonly value: number;
}

export const Count = ({ value }: Props) => {
  return <Container>{value}</Container>;
};
