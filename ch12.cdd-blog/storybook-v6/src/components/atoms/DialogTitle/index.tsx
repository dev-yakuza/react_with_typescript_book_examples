import styled from '@emotion/styled';

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

interface Props {
  readonly title: string;
}

export const DialogTitle = ({ title }: Props) => {
  return <Title>{title}</Title>;
};
