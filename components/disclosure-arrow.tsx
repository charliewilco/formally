import { ChevronDown } from "../components/icons";
import { useDisclosureContext } from "@reach/disclosure";

export const Arrow = () => {
  const { open } = useDisclosureContext();
  return (
    <div aria-label="Arrow" className={open ? "open" : ""}>
      <ChevronDown />

      <style jsx>
        {`
          [aria-label="Arrow"] {
            width: 1.25rem;
            height: 1.25rem;
          }
          .open {
            transform: rotate(180deg);
          }
        `}
      </style>
    </div>
  );
};
