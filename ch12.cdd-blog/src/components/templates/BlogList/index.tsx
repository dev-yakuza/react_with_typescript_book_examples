import { useState } from 'react';
import styled from '@emotion/styled';

import { Header } from 'components/organisms/Header';
import { BlogItem } from 'components/organisms/BlogItem';
import { Button } from 'components/atoms/Button';
import { RegisterBlogDialog } from 'components/organisms/RegisterBlogDialog';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

export interface Post {
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

interface Props {
  readonly posts?: ReadonlyArray<Post>;
}

export const BlogList = ({ posts = [] }: Props) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Container>
      <Header />
      {posts.map((blog) => (
        <BlogItem key={blog.id} title={blog.title} body={blog.body} />
      ))}
      <ButtonContainer>
        <Button label="등록" onClick={() => setShowDialog(true)} />
      </ButtonContainer>
      {showDialog && <RegisterBlogDialog onClose={() => setShowDialog(false)} />}
    </Container>
  );
};
