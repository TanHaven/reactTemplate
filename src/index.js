//引入react核心库
import React from "react";

// 引入ReactDOM(React17)
// import ReactDOM from "react-dom";
// React18
import { createRoot } from 'react-dom/client';

// 引入App组件
import App from './App';

// 渲染App到页面(React17)
// ReactDOM.render(<App/>,document.getElementById('root'))


// React18
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);