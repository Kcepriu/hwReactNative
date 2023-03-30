import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const IconPlus = props => (
  <Svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0H6v6H0v1h6v6h1V7h6V6H7V0Z"
    />
  </Svg>
);

export const IconCamera = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
    <Path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9Zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />

    {/* <Path d="M0 0h24v24H0z" /> */}
  </Svg>
);

export const IconX = props => (
  <Svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1.257.55-.707.707L4.793 5.5.55 9.743l.707.707L5.5 6.207l4.243 4.243.707-.707L6.207 5.5l4.243-4.243L9.743.55 5.5 4.793 1.257.55Z"
      fill="#BDBDBD"
    />
  </Svg>
);

export const IconUser = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      // stroke="#212121"
      strokeOpacity={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      // stroke="#212121"
      strokeOpacity={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconUp = props => (
  <Svg
    width={12}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6 1 .354-.354a.5.5 0 0 0-.708 0L6 1Zm4.646 5.354a.5.5 0 0 0 .708-.708l-.708.708Zm-10-.708a.5.5 0 1 0 .708.708l-.708-.708ZM5.5 15a.5.5 0 0 0 1 0h-1Zm.146-13.646 5 5 .708-.708-5-5-.708.708Zm0-.708-5 5 .708.708 5-5-.708-.708ZM5.5 1v7h1V1h-1Zm0 7v7h1V8h-1Z"
      fill="#fff"
    />
  </Svg>
);

export const IconTrash = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 6h18"
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.5 6a.5.5 0 0 0-1 0h1Zm-14 0a.5.5 0 0 0-1 0h1Zm2 0a.5.5 0 0 0 1 0h-1Zm8 0a.5.5 0 0 0 1 0h-1Zm3 0v14h1V6h-1Zm0 14a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1ZM17 21.5H7v1h10v-1Zm-10 0A1.5 1.5 0 0 1 5.5 20h-1A2.5 2.5 0 0 0 7 22.5v-1ZM5.5 20V6h-1v14h1Zm3-14V4h-1v2h1Zm0-2A1.5 1.5 0 0 1 10 2.5v-1A2.5 2.5 0 0 0 7.5 4h1ZM10 2.5h4v-1h-4v1Zm4 0A1.5 1.5 0 0 1 15.5 4h1A2.5 2.5 0 0 0 14 1.5v1ZM15.5 4v2h1V4h-1Z"
      fill="#BDBDBD"
    />
    <Path
      d="M10 11v6M14 11v6"
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconLike = props => (
  <Svg
    width={19}
    height={18}
    // fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.365 6.6h-.5a.5.5 0 0 0 .5.5v-.5Zm0-3.2h.5-.5ZM8.773 1V.5a.5.5 0 0 0-.45.284l.45.216ZM5.32 8.2l-.451-.216a.5.5 0 0 0-.05.216h.5Zm0 8.8h-.5a.5.5 0 0 0 .5.5V17Zm9.742 0 .005-.5h-.005v.5Zm1.728-1.36-.494-.082v.001l.494.08Zm1.191-7.2.494.082V8.52l-.494-.081ZM16.253 6.6v.5h.005l-.005-.5ZM5.32 17v.5a.5.5 0 0 0 .5-.5h-.5Zm0-8.8h.5a.5.5 0 0 0-.5-.5v.5Zm6.546-1.6V3.4h-1v3.2h1Zm0-3.2c0-1.637-1.421-2.9-3.092-2.9v1c1.192 0 2.092.886 2.092 1.9h1ZM8.323.784l-3.455 7.2.901.432 3.455-7.2-.901-.432ZM4.819 8.2V17h1V8.2h-1Zm.5 9.3h9.742v-1H5.32v1Zm9.737 0c1.08.011 2.053-.72 2.226-1.78l-.987-.16c-.085.517-.585.947-1.229.94l-.01 1Zm2.226-1.778 1.192-7.2-.987-.164-1.192 7.2.987.164Zm1.192-7.201a2.02 2.02 0 0 0-.533-1.713l-.73.684c.231.245.326.562.276.867l.987.162Zm-.533-1.713a2.29 2.29 0 0 0-1.693-.708l.01 1a1.29 1.29 0 0 1 .954.392l.729-.684ZM16.253 6.1h-4.888v1h4.888v-1ZM5.32 16.5H2.727v1H5.32v-1Zm-2.592 0c-.714 0-1.227-.528-1.227-1.1h-1c0 1.195 1.034 2.1 2.227 2.1v-1ZM1.5 15.4V9.8h-1v5.6h1Zm0-5.6c0-.572.513-1.1 1.227-1.1v-1C1.534 7.7.5 8.605.5 9.8h1Zm1.227-1.1H5.32v-1H2.727v1Zm2.092-.5V17h1V8.2h-1Z"
      // fill="#FF6C00"
    />
  </Svg>
);

export const IconMessage = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 11.5a8.38 8.38 0 0 0 .9 3.8 8.5 8.5 0 0 0 7.6 4.7 8.38 8.38 0 0 0 3.8-.9L21 21l-1.9-5.7a8.38 8.38 0 0 0 .9-3.8 8.5 8.5 0 0 0-4.7-7.6 8.38 8.38 0 0 0-3.8-.9H11a8.48 8.48 0 0 0-8 8v.5Z"
    />
  </Svg>
);

export const IconLocation = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      clipRule="evenodd"
      d="M20 10.364C20 16.09 12 21 12 21s-8-4.91-8-10.636C4 6.297 7.582 3 12 3s8 3.297 8 7.364v0Z"
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconLogOut = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9"
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconGrid = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* <Path fill="transparent" d="M0 0h24v24H0z" /> */}
    <Path
      clipRule="evenodd"
      d="M3 3h7v7H3V3ZM14 3h7v7h-7V3ZM14 14h7v7h-7v-7ZM3 14h7v7H3v-7Z"
      // stroke="#212121"
      strokeOpacity={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconLeft = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 12H4M10 18l-6-6 6-6"
      stroke="#212121"
      strokeOpacity={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
//  fill="#FF6C00"
