import React from "react"

const WithdrawalsmallSvg = ({ color }) => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_5926_28191"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="15"
        height="18"
      >
        <path
          d="M1.8 17H13C13.2122 17 13.4157 16.9157 13.5657 16.7657C13.7157 16.6157 13.8 16.4122 13.8 16.2V5H9.8V1H1.8C1.58783 1 1.38434 1.08429 1.23431 1.23431C1.08429 1.38434 1 1.58783 1 1.8V16.2C1 16.4122 1.08429 16.6157 1.23431 16.7657C1.38434 16.9157 1.58783 17 1.8 17Z"
          fill="white"
          stroke="white"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.79688 1L13.7969 5"
          stroke="white"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.20313 9.39844L4.20312 11.3984L6.20313 13.3984"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.20312 11.3992H10.6031V8.19922"
          stroke={color}
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_5926_28191)">
        <path
          d="M-2.20312 -0.601562H16.9969V18.5984H-2.20312V-0.601562Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default WithdrawalsmallSvg
