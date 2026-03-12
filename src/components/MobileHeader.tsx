import type { Dispatch, SetStateAction } from "react";
import Hamburger from "/src/assets/hamburger.svg?react";

type Props = {
  setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileHeader({ setIsSidePanelOpen }: Props) {
  return (
    <div className="w-full h-16 p-4 bg-background flex justify-end sticky top-0 xs:hidden z-1001">
      <button onClick={() => setIsSidePanelOpen(true)}>
        <Hamburger className="size-6 invert" />
      </button>
    </div>
  );
}
