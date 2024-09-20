import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const OpenEye = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} {...props}>
    <Defs>
      <ClipPath id="a">
        <Path fill="#444" d="M287 21h18v18h-18z" data-name="Rectangle 539" />
      </ClipPath>
    </Defs>
    <G
      clipPath="url(#a)"
      data-name="Mask Group 19"
      transform="translate(-287 -21)"
    >
      <G data-name="Group 2">
        <G data-name="Group 1">
          <Path
            fill="#444"
            d="M304.886 29.65c-.161-.22-3.993-5.386-8.886-5.386s-8.725 5.166-8.886 5.386a.594.594 0 0 0 0 .7c.161.22 3.992 5.386 8.886 5.386s8.725-5.166 8.886-5.386a.593.593 0 0 0 0-.7ZM296 34.549c-3.6 0-6.726-3.429-7.651-4.55.923-1.121 4.039-4.548 7.651-4.548s6.726 3.428 7.651 4.549c-.923 1.122-4.039 4.549-7.651 4.549Z"
            data-name="Path 168"
          />
        </G>
      </G>
      <G data-name="Group 4">
        <G data-name="Group 3">
          <Path
            fill="#444"
            d="M296 26.44a3.56 3.56 0 1 0 3.56 3.56 3.565 3.565 0 0 0-3.56-3.56Zm0 5.934A2.374 2.374 0 1 1 298.374 30 2.376 2.376 0 0 1 296 32.374Z"
            data-name="Path 169"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default OpenEye;
