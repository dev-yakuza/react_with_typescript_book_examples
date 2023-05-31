import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: calc(100% - 40px);
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Header = () => {
  return (
    <Container>
      <Title>블로그 포스트</Title>
    </Container>
  );
};
