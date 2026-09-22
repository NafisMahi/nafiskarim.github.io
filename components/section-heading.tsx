import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-serif text-2xl sm:text-[1.75rem] font-semibold tracking-tight pb-2 mb-6 border-b border-rule">
      {children}
    </h2>
  );
}

export default SectionHeading;
