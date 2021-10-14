export default function ArrowIcon({ size = "1em", color = "currentColor" }) {
  return (
    <svg
      stroke={color}
      fill="none"
      stroke-width="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  );
}