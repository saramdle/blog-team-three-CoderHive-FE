export type IconProps = {
  width: number | string;
  height: number | string;
  color?: string;
  stroke?: string;
  style?: string;
};

export default function MenuIcon({ width, height }: IconProps) {
  return (
    <svg
      className={`w-${width} h-${height}`}
      fill="none"
      viewBox="0 0 512 512"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  );
}
