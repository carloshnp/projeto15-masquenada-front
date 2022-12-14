import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	font-family: 'PT Serif', serif;
	line-height: 1;
	background-color: #f0eacc;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
	box-sizing: border-box;
}
a {
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}
strong {
	font-weight: 700;
}
input {
	border: 0px;
  border-bottom: 1px solid #000000;
  background-color: #f0eacc;
}
input::placeholder {
  color: #333333;
  font-size: 15px;
}
input:focus {
  outline: inherit;
}
button {
	height: 45px;
	border: 0px;
	cursor: pointer;
	background-color: #2D5C76;
  color: #F0EACC;
  font-weight: 700;
	font-size: 14px;
	text-transform: uppercase;
	display: flex;
  justify-content: center;
  align-items: center;
	&:disabled {
  opacity: 0.8;
  cursor: default;
  }
}
ion-icon {
  cursor: pointer;
}
`

export default GlobalStyle;