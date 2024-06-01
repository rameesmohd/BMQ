import React from 'react';
import { Collapse } from 'antd';

const items = [
  {
    key: '1',
    label: 'What is the minimum amount of money needed to start trading?',
    children:  <p
    style={{
      paddingLeft: 24,
    }}
    >
      The minimum amount 
      of money needed to start trading varies depending on the broker and the type
       of trading account. However, in general, you can start trading with a minimum deposit of around $50 with many brokers.
    </p>,
  },
  {
    key: '2',
    label: 'What is advanced technical analysis, and how is it used in trading?',
    children: <p
    style={{
      paddingLeft: 24,
    }}
    >
    Advanced technical analysis is used by experienced traders to refine their strategies and increase the likelihood of profitable trades. <br />It involves the use of complex tools and techniques to predict future price movements more accurately.
    </p>,
  },
  {
    key: '3',
    label: 'Can i trade in any markets with this technical knowledge gained from this course?',
    children: 'Absolutely, our advanced technical analysis and its strategies can be applied to any charts, whether in stocks, crypto, or other financial markets.',
  },
];
const App = () => <Collapse items={items} bordered={false} defaultActiveKey={['1']} />;
export default App;