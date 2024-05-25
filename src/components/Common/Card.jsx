import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const App = ({image}) => (
  <Card
    hoverable
    style={{
      width: '100%',
      height : '100%'
    }}
    cover={image}
  >
    <Meta title="Beatmarket Mastering Trading" description=" 
    Unlock the secrets of successful trading with our comprehensive course on indicators, liquidity, market structure, and market maker concepts. 
    Whether you're a beginner or an experienced trader, this course will equip you with the knowledge and strategies to navigate the financial markets confidently." />
  </Card>
);
export default App;