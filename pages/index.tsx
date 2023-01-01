import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import SampleMixin from './sample-mixin';
import SampleInheritance from './sample-inheritance';
import SampleAs from './sample-as';
import SampleClassname from './sample-classname';
import SampleTheme from './sample-theme';

const H1 = styled.h1`
  color: skyblue;
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <H1>hello next.js</H1>
      <SampleMixin />
      <SampleInheritance />
      <SampleAs />
      <SampleClassname />
      <SampleTheme />
    </div>
  );
};

export default Home;
