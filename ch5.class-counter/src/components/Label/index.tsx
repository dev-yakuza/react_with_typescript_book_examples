import { Component } from 'react';
import styled from '@emotion/styled';

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

interface Props {
  readonly data: number;
}

export class Label extends Component<Props> {
  render() {
    const { data } = this.props;
    return <Container>{data}</Container>;
  }
}
