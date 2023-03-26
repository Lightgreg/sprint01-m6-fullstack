import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  :root{
    --color-primary:#468339;
    --color-primary-focus:#40CC22;
		--gradient1:#1E1F27;
		--gradient2:#2F4147;
    --color-primary-negative:#47A433;
    --color-sucess:#3FE864;
    --color-negative:#E83F5B;
    --grey-0:#F8F9FA;
    --grey-1:#888E92;
    --grey-2:#343B41;
    --grey-3:#212529;
    --grey-4:#121214;
    --grey-4-opacity:#12121490;

		--font-f:'Roboto Mono', monospace;
  }


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
menu, nav, output, ruby,button, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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
*,
*:before,
*:after {
  box-sizing: border-box;
}

*{
	font-family: 'Inter Tight', sans-serif;
}

img{
	width: 100%;
}

`