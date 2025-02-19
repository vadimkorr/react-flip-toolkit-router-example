import React from 'react'

const GlassRecycling = (props) => (
  <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" {...props}>
    <path fill="#75EA9C" d="M31 10s0 17-3 17H13c-3 0-3-17-3-17h21z" />
    <path fill="#A4FFBE" d="M31 5v5H10V5s0-4 4-4h13s4 0 4 4" />
    <path fill="#75EA9C" d="M14 1v5s0 2 2 2h9s2 0 2-2V1H14z" />
    <path
      fill="#4D5152"
      d="M26.996 2c.506.006 3.004.18 3.004 3v4H11V5.006C11.006 4.504 11.177 2 14 2h12.996M27 1H14c-4 0-4 4-4 4v5h21V5c0-4-4-4-4-4"
    />
    <path
      fill="#4D5152"
      d="M26 2v4c0 .805-.55.988-1 1h-9c-.805 0-.988-.55-1-1V2h11m1-1H14v5s0 2 2 2h9s2 0 2-2V1zm3 9c0 7.826-.957 15.251-2.056 16H13.056c-1.117-.756-2.055-8.035-2.056-16h19m1-1H10v1s0 17 3 17h15c3 0 3-17 3-17V9z"
    />
    <path
      fill="#ACF0F2"
      d="M14 19v10s0 2-2 2H4c-2 0-2-2-2-2V19s0-2 2-3c1.36-.68 1.8-2.75 1.94-4H5V8h6v4h-.94c.14 1.25.58 3.32 1.94 4 2 1 2 3 2 3"
    />
    <path fill="#AAA" d="M5 8h6v4H5z" />
    <g opacity={0.6}>
      <defs>
        <path id="a" d="M2 20h12v9H2z" />
      </defs>
      <clipPath id="b">
        <use xlinkHref="#a" overflow="visible" />
      </clipPath>
      <path clipPath="url(#b)" fill="#FFF" d="M2 25v4l12-5v-4z" />
    </g>
    <path
      fill="#4D5152"
      d="M12 16c-1.36-.68-1.8-2.75-1.94-4H11V8H5v4h.94c-.14 1.25-.58 3.32-1.94 4-2 1-2 3-2 3v10s0 2 2 2h8c2 0 2-2 2-2V19s0-2-2-3M6 9h4v2H6V9zm7 19.99c-.01.46-.19 1.01-1 1.01H4c-.81 0-.99-.55-1-1V19c0-.01.02-1.39 1.45-2.11 1.83-.91 2.35-3.45 2.49-4.89h2.12c.141 1.44.65 3.98 2.49 4.89 1.4.7 1.45 2.06 1.45 2.11v9.99z"
    />
    <path
      fill="#4D5152"
      d="M4.5 24a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5m0 4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5"
    />
  </svg>
)

export default GlassRecycling
