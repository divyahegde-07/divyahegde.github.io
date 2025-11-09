import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(20.000000, 29.000000)">
        {/* Ultra simple D shape */}
        <path
          d="M12,30 L12,6 L22,6 C26,6 28,7 30,9 C32,11 33,14 33,18 C33,22 32,25 30,27 C28,29 26,30 22,30 Z 
             M17,25 L22,25 C24,25 25,24 26,23 C27,22 27.5,20 27.5,18 C27.5,16 27,14 26,13 C25,12 24,11 22,11 L17,11 Z"
          fill="currentColor"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
