import React from "react"

const WithdrawallargeSvg = ({ color }) => {
  return (
    <svg
      width="95"
      height="117"
      viewBox="0 0 95 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_5926_28205"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="95"
        height="117"
      >
        <path
          d="M10.5224 110.819H83.7891C85.177 110.819 86.5082 110.268 87.4896 109.286C88.471 108.305 89.0224 106.974 89.0224 105.586V32.319H62.8557V6.15234H10.5224C9.13443 6.15234 7.80331 6.70371 6.82187 7.68515C5.84043 8.66659 5.28906 9.99771 5.28906 11.3857V105.586C5.28906 106.974 5.84043 108.305 6.82187 109.286C7.80331 110.268 9.13443 110.819 10.5224 110.819Z"
          fill="white"
          stroke={color}
          stroke-width="10.5333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M62.8438 6.15234L89.0104 32.319"
          stroke="white"
          stroke-width="10.5333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M39.3021 61.1094L26.2188 74.1927L39.3021 87.276"
          stroke={color}
          stroke-width="10.5333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M26.2188 74.199H68.0854V53.2656"
          stroke={color}
          stroke-width="10.5333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_5926_28205)">
        <path
          d="M-15.6406 -4.31641H109.959V121.284H-15.6406V-4.31641Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default WithdrawallargeSvg
