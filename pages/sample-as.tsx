import { NextPage } from 'next';
import styled, { css } from 'styled-components';

const LinkText = css`
  text-decoration: underline;
`;

const Text = styled.p`
  color: lime;
  font-size: 2rem;
  font-weight: bold;
  ${LinkText}
`;

const SampleAs: NextPage = () => {
  return (
    <div>
      <Text as='a' href='/'>
        asで別要素としてスタイリングされたテキストです
      </Text>
    </div>
  );
};

export default SampleAs;
