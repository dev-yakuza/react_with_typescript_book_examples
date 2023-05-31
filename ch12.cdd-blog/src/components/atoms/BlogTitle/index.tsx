import styled from '@emotion/styled';

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

interface Props {
  readonly title: string;
}

export const BlogTitle = ({ title }: Props) => {
  return <Title>{title}</Title>;
};
