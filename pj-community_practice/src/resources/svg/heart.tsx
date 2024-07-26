type Props = {
  color: string;
};

const HeartIcon = ({ color }: Props) => (
  <svg width={20} height={21} fill="none">
    <g clipPath="url(#a)">
      <path
        // fill="#DADFE8"
        fill={color}
        d="M13.905 3.874a4.444 4.444 0 0 0-3.501 1.69.53.53 0 0 1-.808 0 4.444 4.444 0 0 0-3.501-1.69c-2.446 0-4.428 1.952-4.428 4.36 0 2.47 1.519 6.318 7.687 9.485.405.208.887.208 1.292 0 6.168-3.167 7.687-7.015 7.687-9.485 0-2.408-1.982-4.36-4.428-4.36Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M1.667 3.874h16.667V18.04H1.667z" />
      </clipPath>
    </defs>
  </svg>
);
export default HeartIcon;
