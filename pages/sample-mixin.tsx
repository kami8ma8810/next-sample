import { NextPage } from 'next';
import styled, { css } from 'styled-components';

const defaultFont = css`
  color: #1e90ff;
  font-size: 2rem;
`;

const Text = styled.p`
  font-weight: bold;

  //mixin
  ${defaultFont}
`;

const SampleMixin: NextPage = () => {
  return (
    <div>
      <Text>mixinでスタイリングされたテキストです</Text>
    </div>
  );
};

export default SampleMixin;
