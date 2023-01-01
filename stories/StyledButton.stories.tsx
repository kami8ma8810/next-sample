import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import MDXDocument from './StyledButton.mdx'; // eslint-disable-line

// ファイル内のstoryの設定（メタデータオブジェクト）
export default {
  //グループ名
  title: 'StyledButton',
  //使用するコンポーネント
  component: StyledButton,
  argTypes: {
    // propsに渡すvariantをStorybookから変更できるように追加
    variant: {
      // ラジオボタンで設定できるようにする
      ontrol: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    // propsに渡すchildrenをStorybookから変更できるように追加
    children: {
      // テキストボックスで入力できるようにする
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      // ドキュメント用のmdxコンポーネントを指定
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>;

// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof StyledButton> = (args) => (
  <StyledButton {...args} />
);

// bind関数を呼び出しStoryを作成
export const TemplateTest = Template.bind({});

// デフォルトのpropsを設定する
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
};
