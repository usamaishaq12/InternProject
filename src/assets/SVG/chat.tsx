import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const Chat = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="none" d="M331 62h16v16h-16z" data-name="Rectangle 535" />
      </ClipPath>
    </Defs>
    <G
      clipPath="url(#a)"
      data-name="Mask Group 54"
      transform="translate(-331 -62)"
    >
      <Path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M346.2 69.6a6.7 6.7 0 0 1-.72 3.04 6.8 6.8 0 0 1-6.08 3.76 6.7 6.7 0 0 1-3.04-.72l-4.56 1.52 1.52-4.56a6.7 6.7 0 0 1-.72-3.04 6.8 6.8 0 0 1 3.76-6.08 6.7 6.7 0 0 1 3.04-.72h.4a6.784 6.784 0 0 1 6.4 6.4Z"
      />
    </G>
  </Svg>
);
export default Chat;
