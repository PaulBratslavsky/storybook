export default function CheckIcon({ size = "1.5em", color = "currentColor" }) {
  return (
    <svg fill={color} viewBox="0 0 24 24" height={size} width={size}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      ></path>
    </svg>
  );
}