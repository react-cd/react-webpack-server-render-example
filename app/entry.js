var React = require('react'),
	ReactDOM = require('react-dom'),
	App = require('./App');

var APP_PROPS = window.APP_PROPS || {};

// 注释之后 页面还是能够出来，但是浏览器没有通过 react.render执行，将里面的 onClick 变成原生的 click 事件，所以点击没有效果
// ReactDOM.render(
// 	<App initialCount={APP_PROPS.initialCount}/>,
// 	document.getElementById('root')
// );