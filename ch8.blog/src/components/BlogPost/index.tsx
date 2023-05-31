import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 30px #d9d9d9, -10px -10px 30px #ffffff;
  max-width: 800px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

interface Props {
  readonly title: string;
  readonly body: string;
}

export const BlogPost = ({ title, body }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};
