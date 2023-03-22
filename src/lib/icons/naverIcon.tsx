import { IconProps } from "./menuIcon";

export default function NaverIcon({ width, height }: IconProps) {
  return (
    <svg
      className={`w-${width} h-${height} mr-auto ml-1 text-inherit`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z" />
    </svg>
  );
}
