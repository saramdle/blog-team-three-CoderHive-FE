import { IconProps } from "./menuIcon";

export default function CloseIcon({ width, height, color, style }: IconProps) {
  return (
    <svg
      className={`w-${width} h-${height} ${color} ${style}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
