export const MarkdownIcon = () => (
  <svg width="25" height="15.38461538" viewBox="0 0 208 128">
    <rect
      width="198"
      height="118"
      x="5"
      y="5"
      ry="10"
      stroke="rgba(30, 184, 235, 0.35)"
      strokeWidth="10"
      fill="none"
    />
    <path
      fill="rgba(30, 184, 235, 0.35)"
      d="M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z"
    />
  </svg>
);

export const Marker = () => {
  return (
    <svg
      width={29.25}
      height={36}
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C3.41546 2.10893 2.89286 2.37571 2.4322 2.80036C1.8258 3.37152 1.5226 4.14134 1.5226 5.10982V6.65567H0.257062V7.69864H1.5226V13.882H0V14.9436H4V13.882H2.92655V7.69864H4V6.65567H2.92655V4.99807C2.92655 3.90705 3.28437 3.26824 4 3.08162V2Z"
        fill="var(--fg)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="var(--highlight)"
        d="M7 15H8.92901V13.8185H7V15ZM7 10.0338H12.288V8.85231H7V10.0338ZM7 4.18154H11.43L11.7951 6.58154L13 6.45231L12.6166 3H7V4.18154Z"
      />
      <rect x={5} width={1} height={16} opacity="50%" fill="var(--fg)" />
    </svg>
  );
};
