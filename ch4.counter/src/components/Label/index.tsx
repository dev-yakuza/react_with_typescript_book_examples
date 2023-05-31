import styled from '@emotion/styled';

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

interface Props {
  readonly data: number;
}

export const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};
