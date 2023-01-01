import { NextPage } from 'next';
import styled from 'styled-components';

const Text = styled.p`
  color: salmon;
  font-size: 2rem;
  font-weight: bold;
`;

// Textを継承し、ボーダーのスタイルを加えたコンポーネント
const BorderText = styled(Text)`
  padding: 0.5em 1em;
  border: 2px solid currentColor;
  border-radius: 8px;
`;

const SampleInheritance: NextPage = () => {
  return (
    <div>
      <BorderText>スタイルの継承でスタイリングされたテキストです</BorderText>
    </div>
  );
};

export default SampleInheritance;
