var React = require('react');
var ReactDOMServer = require("react-dom/server");

var App = require('../app/App');

var ReactDOM = require('react-dom');


module.exports = function (props) {

	// 这个是标记
	var content = ReactDOMServer.renderToString(
		<App initialCount={props.initialCount}></App>
	);

	var propsScript = 'var APP_PROPS = ' + JSON.stringify(props);

	var html = ReactDOMServer.renderToStaticMarkup(
		<html>
			<head>
			</head>
			<body>
				{/* 这个就是插入一些东西，在node不适用模板ng模板 这样也是可以的把，这样就是放在window上了 北斗好像就没有使用大量模板 */}
				<div id="root" dangerouslySetInnerHTML={
					{ __html: content }
				} />
				{/*  */}
				<script dangerouslySetInnerHTML={
					{ __html: propsScript }
				}></script>
				<script src={"assets/entry.generator.js"}></script>
			</body>
		</html>
	);

	return html;
}