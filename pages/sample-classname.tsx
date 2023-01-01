import { NextPage } from 'next';
import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};

// Next.jsのリンクにスタイルを適用するためのヘルパーコンポーネント
// このコンポーネントをsytled-comonentsで使用すると、定義したスタイルに対応するclassNameがpropsとして渡される
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;
  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
};

const StyledLink = styled(BaseLink)`
  color: violet;
  font-size: 2rem;
  font-weight: bold;
`;

const SampleClassname: NextPage = () => {
  return (
    <div>
      <StyledLink href='/'>
        リンク用コンポーネントでスタイリングされたテキストです
      </StyledLink>
    </div>
  );
};

export default SampleClassname;
