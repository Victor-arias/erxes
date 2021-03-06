import styled from "styled-components"
import { injectGlobal } from 'styled-components';
import 'ionicons/css/ionicons.min.css';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500');
  body {
    margin: 30px;
		font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', 'Arial',   sans-serif;
  }
`;

export const Heading1 = styled.h1`
	display: inline-block;
	border-radius: 3px;
  font-weight: normal;
`;

export const SmallText = styled.div`
	color: rgba(0, 0, 0, .3);
	font-size: 16px;
	line-height: 1;
	margin-bottom: 1em;
	text-transform: uppercase;
`;
