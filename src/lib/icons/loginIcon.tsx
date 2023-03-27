import { IconProps } from "./menuIcon";

export default function LoginIcon({ width, height, color, style }: IconProps) {
  return (
    <svg
      className={`w-${width} h-${height} ${color} ${style}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2" />
      <path d="M20 12H7l3-3m0 6l-3-3" />
    </svg>
  );
}