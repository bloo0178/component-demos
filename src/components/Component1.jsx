import React from "react";
import styles from "./Component1.module.css";
//import bones from "../images/cross-bones.svg";

/*

Using SVG as CSS background-image. Also, experiment using inline SVG. Offers more flexibility with modifying the SVG within the React component; however, can get messy with a long path.

*/

export function Component1(props) {
  return (
    <div className={styles.Container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="bones-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#FF9133" }} />
            <stop offset="100%" style={{ stopColor: "#FF0015" }} />
          </linearGradient>
        </defs>

        <g fill="url(#bones-gradient)">
          <path
            className={styles.Bones}
            d="M38.8 97.7c-2.1 1.1-4.2 2.4-6.1 4-.9.8-3.4 3.1-3.1 4.5.6 3.1 6.4.1 7.9-.7 2.7-1.4 8.6-3.7 9.9-6.6 2.4-5.3-6.7-2.2-8.6-1.2zM143.4 82c-.9-4.1-4.2-8.9-7.7-11.2-5.1-3.3-14.6-8.2-20.1-3.1l.6-.4c-5 4.7 5.5 1.2 6.2 3.1.4 1.1-2.6 2.2-3.3 3-1.1 1.2-1.7 3.1-1.6 4.9.4 6.3 7.9 10.6 13.5 11.4 4.5.7 13.8-1.7 12.4-7.7z"
          />

          <path
            className={styles.Bones}
            d="M179.1 128.8c-4.9-4.2-10.6.5-19-4-2.2-1.2-9.1-5.7-18.3-11.7 1.7-.9 3-1.9 4.1-3 3.9-4.1 4.5-7.1 4.6-8.2 1.2-1 4.8-4.7 5.2-13.2.3-6-2.6-8.7-7.1-11-.2-.1-.5-.3-.7-.4-1-.7-1.9-1.9-2.7-3-.5-.7-1-1.3-1.6-1.9-1.4-1.5-2.9-2.9-4.3-4.1 2.6-3.2 4.5-5.5 5.5-6.5 6.6-6.9 13.5-4.3 16.8-9.8 3.3-5.5 1.6-11.9-2-12.5-2.7-.4-5.2 1.1-7 .3-.7-.3-1.3-1-1.8-2.3-.9-2.5-1.3-5.8-4.6-6-4.5-.2-11.6.8-10.7 9 .9 8.2 5.1 6.2-5.9 21.7l-.1.1c-2-.7-3.9-1.1-5.7-1.1-1.2 0-2.5.2-3.6.5-5.9 1.6-9 3.6-11 4.9-1.2.8-2.1 1.3-2.8 1.3-.3 0-.6-.1-.9-.2-.6-.2-1.2-.6-2-1-2.2-1.2-5.1-2.9-8.4-2.9-2.2 0-4.4.8-6.3 2.4-2.2 1.8-2.6 4-3.1 6-.2.8-.3 1.6-.6 2.5-8.7-6-15-10.4-16.2-11.4-4.6-3.8-1.5-14.7-5.8-16.5-4.3-1.9-8.6 3.8-13.6 2.9-5-.9-10.8.7-10.7 8.4s10.3 6.9 15.1 10c1.6 1 10.3 6.7 21.8 14.3-2.3.9-5.2 1.7-8.8 2.5C40.8 90.8 19 96.6 17 106.3c-1 4.8.5 8.2 4.4 10.1.1.1.2.3.4.4l.6.6c.4.4.6 1 .8 1.6.2.5.4 1.1.8 1.6.7 1.2 1.6 2.4 2.8 2.4 1.3 0 2-1.4 2.2-1.8.2-.5.4-1 .5-1.3.3-.9.3-1.1 1.3-1.2h.1c.8 0 1.4.4 2.1 1 .5.4 1.1.9 2 1.2.7.3 1.1.4 1.5.4 1.2 0 1.3-1.1 1.4-1.6 0-.4.1-.8.3-1.2.1-.3.3-.6.6-.8.5 0 1-.1 1.5-.2.2.1.4.2.6.4.1.1.5.7.7 1.2.8 1.4 1.5 2.8 2.7 2.8h.1c1-.1 1.3-1.3 1.8-3 .2-.7.5-1.8.7-2.1l.3-.3c.5-.1 1.1-.2 1.7-.3.3.3.6.8.9 1.3.8 1.2 1.7 2.8 3.4 2.8.3 0 .6-.1.9-.2 1.3-.4 2-1.9 2.7-3.2.7-1.4 1.2-2.4 1.9-2.4.3 0 .8.2 1.2.5.4.3.8.7 1.1 1.2.7.9 1.5 1.9 3 1.9.4 0 .8-.1 1.2-.2 1.7-.6 2.2-2 2.6-3.1.2-.6.4-1.2.8-1.7.7-.9 1.3-1.4 1.8-1.4.4 0 .8.3 1.1.7.2.2.3.5.5.7.5.8 1.1 1.7 2.2 1.7.7 0 1.4-.4 2.2-1.3.5-.5.8-1.2 1-1.8.4-1.1.6-1.5 1.3-1.6h.1c.3 0 .5.2.8.7.4.5 1 1.3 2.1 1.3.3 0 .5 0 .8-.1.9-.3 1.5-1.1 1.9-1.8.3-.5.6-.9.9-1.1.4-.2.7-.2.8-.3 0 .2 0 .5-.2 1.1-2 1.7-4.4 3.5-7 5.2h-.2c-.6 0-1.4 0-2.2.2-1.9.3-2.6 1.3-3.3 2.3-.3.4-.6.9-1.1 1.3-.5.5-.9.5-1.1.5-.3 0-.7-.1-1.1-.2-.6-.2-1.2-.4-2-.4h-.2c-2.2.1-2.7 1.2-3.2 2.3-.1.3-.3.7-.5 1-.2.4-.4.6-.5.7-.1 0-.1-.1-.2-.1-.4-.3-.9-.6-1.8-.8-.4-.1-.7-.1-1.1-.1-1.6 0-2.3 1.1-2.8 2-.1.2-.2.4-.4.6-.7 1.1-.9 1.1-1.1 1.1-.3 0-.7-.1-1.3-.3l-.8-.2c-.7-.2-1.4-.4-2.1-.4-1.2 0-2.1.6-2.8 1.6-.4.7-.5 1.3-.6 1.9-.2 1-.2 1-.8 1h-.2c-.2 0-.7-.2-1.1-.4-.6-.3-1.4-.7-2.2-.7-.7 0-1.3.3-1.8.9-.6.7-.5 1.7-.5 2.4 0 .4.1.9 0 1-.1.1-.3.2-.7.2-.3 0-.6-.2-1-.4-.5-.3-1.2-.7-2-.7h-.3c-2.6.4-3.9 5.5-3.7 7.6.2 3.7 2 4.2 5.8 4.9.7.1 1.5.2 2.4.2 7.7 0 19.1-4.9 31.3-10.2-6.4 8-11 13.8-12 15-3.6 4.4-13.6 6.9-11.3 14.2 2.3 7.3 8.3 7 12.8 4.6 4.5-2.4 10.3 1.7 13.8-1.5s-2.8-12.5.4-17.5c1.1-1.7 8.4-11.3 17.8-23.6 4.7-1.7 9.3-3 13.4-3.7 8.2-1.4 14.8-2.6 20.2-3.8 7.4 5 13.5 9.2 16.8 11.7 15.3 11.3 10.7 10.7 12.4 18.8 1.7 8.1 8.7 6.8 13 5.2 3.1-1.2 2.4-4.5 2.5-7.1.1-1.4.4-2.2 1-2.7 1.5-1.3 4.3-.7 6.8-1.9 3.1-1.9 2.7-8.6-2.2-12.8zm-71.3-13.1c-10.3 1.8-22.6 7.1-34.4 12.2-6.3 2.7-12.6 5.6-19.1 7.8-2.6.9-5.3 1.8-8.1 2.2-.4.1-5.8-.1-4.3-1.9 1-1.3 2.4-.3 3.5-.7 1.8-.6.6-1.6 2-2.8 1.3-1 2.7.1 4-.2 1.8-.4 1.5-1.4 2.6-2.5 1.6-1.5 2.9-.5 4.6-.6 1.9 0 3.5-1.3 4.8-2.7 1.5-1.6 2.1-2.6 4.5-2.5 2 .1 3.7.6 5.6-.8 1.8-1.3 1.5-2.1 3.9-2.1 1.9 0 3.8 0 5.4-1.3 1.3-1 1.6-2.7 3.3-3.2 1.5-.4 2.9.7 4.6.2 1.8-.5 2.1-2.2 3.6-3 1.6-.9 3 .8 4.7.3 1.5-.4 1.9-2.4 3.4-2.9 1.8-.6 2.3 1 4 1.2 3.2.4 8.3-3.1 10.9-4.7 3.9-2.4 5.5-7.8 10.7-7.5 5.1.3 10.5 2.8 15.3-.3-5.3.8-10.5-2.1-15.7-3.2-4.6-1-9.5-.7-14.1.5-2.1.5-4.2 1.2-6.2 1.9-1.9.6-2.7 2.3-4.3 3-2.3 1-3-.5-4.6-1.7-3.1.3-3.3 3.6-6 4-2.9.4-4.9-2.6-8-2.1-3.8.6-7.8 2.1-11.6 2.9-4.5 1-9.2 1.7-13.7 2.9-6.1 1.6-12.1 3.3-18.3 4.4-5.8 1-22.9 2.8-20.7-8.1.2-1 .8-2 1.7-2.9-.2 1.2.5 1.9 2.7.9 1.2-.6 4.8-3.7 2.6-4.6 9.9-5.2 28.1-9.3 40.4-12.1 17.6-4 20.1-9.3 21.3-15.3.4-2 .7-3.1 1.9-4.1 1.3-1.1 2.6-1.6 4.1-1.6 2.4 0 4.8 1.4 6.7 2.5.8.5 1.6.9 2.3 1.2.8.3 1.5.5 2.3.5 1.7 0 3.1-.9 4.6-1.9 2-1.3 4.7-3 10.1-4.5.9-.2 1.8-.4 2.7-.4 3.4 0 7.1 1.5 11.4 4.7 2 1.5 4 3.3 6 5.4.4.5.9 1.1 1.4 1.7.9 1.2 2 2.6 3.4 3.6.4.3.8.5 1.2.7 4.2 2.1 5.4 3.9 5.2 7.8-.3 8.1-3.9 10.7-4.1 10.8l-1.5 1 .4 1.4c0 .4-.4 2.6-3.6 6-3.9 4.6-13.7 6.8-35.5 10.5z"
          />
        </g>

        <g>
          <path
            className={styles.Eye}
            d="M128.1 79.6c1.6 1.3 3.1 2.6 4.7 3.9.6.5 2.7 2.8 3.2 1.4.5-1.3-2.4-3.5-3.2-4.3-1-1-2.2-2-3.2-3.1-1.2-1.2-4.2-5.1-6.4-3.4-.8.6-.3.9.3 1.5 1.5 1.4 3 2.7 4.6 4z"
          />
          <path
            className={styles.Eye}
            d="M130.4 78.1c-1.5 1.4-2.9 2.9-4.3 4.3-.5.5-3.1 2.4-1.7 3.1 1.2.6 3.7-2.1 4.6-2.8 1.1-.9 2.2-2 3.4-2.9 1.3-1.1 5.4-3.8 4-6.1-.5-.8-.8-.4-1.5.2-1.6 1.4-3.1 2.8-4.5 4.2z"
          />
        </g>
      </svg>
    </div>
  );
}
