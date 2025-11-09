import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Inner letter D */}
      <g id="D" transform="translate(38,29)">
        <path
          d="M0 0 H8 C16 0 22 6 22 18 C22 30 16 36 8 36 H0 Z M4 4 V32 H8 C13 32 18 28 18 18 C18 8 13 4 8 4 Z"
          fill="currentColor"
        />
      </g>

      {/* Outer hexagon */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50,5
           L 11,27
           L 11,72
           L 50,95
           L 89,73
           L 89,28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
