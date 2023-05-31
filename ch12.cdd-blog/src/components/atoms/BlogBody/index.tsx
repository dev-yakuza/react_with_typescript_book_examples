import styled from '@emotion/styled';

const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

interface Props {
  readonly body: string;
}

export const BlogBody = ({ body }: Props) => {
  return <Body>{body}</Body>;
};
