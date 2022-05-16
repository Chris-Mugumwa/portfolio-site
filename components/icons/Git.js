import * as React from "react";

const SvgGit = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <path fill="url(#Git_svg__a)" d="M5 5h14v14H5z" />
    <defs>
      <pattern
        id="Git_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#Git_svg__b" transform="scale(.0029)" />
      </pattern>
      <image
        id="Git_svg__b"
        width={344}
        height={344}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAAFYCAYAAAAWbORAAAAgAElEQVR4Ae2dCZAcV3nH/1/PaFd7SEIylo28O7sSwgLbhAAJBOxgIEGOoCztrLMpwJyVQA4H8JVgSFUQqYqxCx84CRCoXDhQSdhCKwkb+QAfHOFIAXGCHUyMbe3KDiD5kHZmV8dMv9RbaezR7M5MH6+7X3f/t8o1093v+N7v6/np+U1PN8A/EiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEiABEsgUAcnUaDiYTBJQ2+FUf7D+1GKxPqAHWKsVqgMve2S/bIebyQFzUJkhQMFmJpXZGYjasrF3rvfIFsB5gxL3XEA2AVjeMsLDAH4sUN8CcGf/4d7bZM9DR1rKcJMEEiVAwSaKn503E5if2FCq12pXAHg7gNXNxzy8fwrAzY5bu75/1+MzHsqzCAlEToCCjRwxO+hG4MmJDat6arWPAvgjAMu6le9y/CggnzxyeNn2U/Y8dKhLWR4mgUgJULCR4mXj3QjMjo+8TpT6PIB13cr6PP6Ygnvxiql99/qsx+IkYIyAY6wlNkQCPglUxkeuEKXujECuOpIzBM7XKuXhy3yGxeIkYIwAZ7DGULIhPwQq5dI1AD7op06IstcOTk1fFaI+q5JAIAIUbCBsrBSGQGW8dDUUPhSmDf915cbBqb2X+6/HGiQQnAAFG5wdawYgkIxcG4FSsg0SfI2HAAUbD2f2AiBZuTZSQMk2SPA1egIUbPSM2YM1cm2kgpJtkOBrtAQo2Gj5snXr5NpICSXbIMHX6AhQsNGxZcvWyrWRGkq2QYKv0RCgYKPhylatl2sjRZRsgwRfzROgYM0zZYupkWsjVZRsgwRf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zwEPBCjZpSBRrktR4b6TCXAGezIPbrUhQMk2g6Fcm2nwfXsCFGx7NjzSQoCS1UAo15bTgpsdCFCwHeDw0GIC+ZYs5br4jOCeTgQo2E50eGxJAvmULOW65MnAnR0JULAd8fBgOwL5kizl2u484P7OBCjYznx4tAOBfEiWcu1wCvBQFwIUbBdAPNyZQLYlS7l2zj6PdiNAwXYjxONdCWRTspRr18SzQFcCFGxXRCzghUC2JEu5esk5y3QnQMF2Z8QSHglkQ7KUq8d0s5gHAhSsB0gs4p1AuiVLuXrPNEt6IUDBeqHEMr4IpFOylKuvJLOwJwIUrCdMLOSXQLokS7n6zS/LeyNAwXrjxFIBCKRDspRrgNSyikcCFKxHUCwWjIDdkqVcg2WVtbwSoGC9kmK5wATslCzlGjihrOiZAAXrGRULhiFgl2Qp1zC5ZF3vBChY76xYMiQBOyRLuYZMI6v7IEDB+oDFouEJJCtZyjV8BtmCHwIUrB9aLGuEQDKSpVyNJI+N+CLg+CrNwiRggMDgjukPA7jWQFNem7hmcGrv5V4LsxwJmCLAGawpkmzHN4FKefgyQD4OoOC7srcKNShcObhz+iZvxVmKBMwSoGDN8mRrPgnMlofOFzifBzDks2q34jOuqy5euWvmG90K8jgJREWASwRRkWW7ngismNp373y97yxAbgBw1FOlzoWOAOq6ueL8WZRrZ1A8Gj0BzmCjZ8wePBKY27Zu2JXi5RC8A8Aaj9UaxZ4A5GZHajf073hsX2MnX0kgSQIUbJL02feSBNSWjb1zPUc3o6A2K1fOheCFAPpaCs9D4ccCfBOCO/qLg3fI5AMmZsAt3XCTBIIToGCDs2PNmAio7XAq959+yrJ6zwrd5bHC0dnByZ8dEEDFFAK7IQESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESAP4fz6/tYPrnzHcAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default SvgGit;
