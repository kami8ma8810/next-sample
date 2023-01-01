import { NextPage } from 'next';
import styled from 'styled-components';

const Text = styled.p`
  color: ${(props) => props.theme.color.red};
  font-size: ${(props) => props.theme.fontSize[5]};
`;

const SampleTheme: NextPage = () => {
  return (
    <div>
      <Text>Themeから参照してスタイリングされたテキストです</Text>
    </div>
  );
};

export default SampleTheme;
