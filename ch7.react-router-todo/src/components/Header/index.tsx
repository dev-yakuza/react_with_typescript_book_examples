import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #304ffe;
  padding: 8px 0;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
`;

export const Header = () => {
  return (
    <Container>
      <StyledLink to="/">할 일 목록 앱</StyledLink>
    </Container>
  );
};
