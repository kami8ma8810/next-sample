import styled, { css } from 'styled-components';

const variants = {
  primary: {
    color: '#ffffff',
    backgroundColor: '#1d3461',
    border: 'none',
  },
  success: {
    color: '#ffffff',
    backgroundColor: '#5ab203',
    border: 'none',
  },
  transparent: {
    color: '#111111',
    backgroundColor: 'transparent',
    border: '1px solid black',
  },
} as const;

export type StyledButtonProps = {
  variant: keyof typeof variants;
};

// StyledButtonはvariantによってボタンの色を制御できるコンポーネント
export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    // variantに与えられたキーを元に、対応するスタイルを取得する
    const style = variants[variant];

    // cssを使い、複数のスタイルを返す
    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}

  border-radius:12px;
  font-size: 14px;
  height: 38px;
  line-height: 2;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
