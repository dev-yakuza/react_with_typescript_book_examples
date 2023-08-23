import styled from '@emotion/styled';

const Container = styled.h1`
  margin-top: 0;
`;

interface Props {
  readonly title: string;
}

export const PageTitle = ({ title }: Props) => {
  return <Container>{title}</Container>;
};
