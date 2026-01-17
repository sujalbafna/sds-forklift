import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="M208 2H48a16 16 0 0 0-16 16v220a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V18a16 16 0 0 0-16-16Zm-40 168a40 40 0 0 1-80 0v-40h80Zm-40-88a24 24 0 1 1-24-24 24 24 0 0 1 24 24Z"
      />
    </svg>
  );
}
