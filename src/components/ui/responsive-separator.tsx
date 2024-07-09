import { Separator } from "@/components/ui/separator";
import React from "react";

type ResponsiveSeparatorProps = {
  horizontalClasses?: string ;
  verticalClasses?: string;
};

export const ResponsiveSeparator = ({
  horizontalClasses = "",
  verticalClasses = "",
}: ResponsiveSeparatorProps) => {
  return (
    <>
      <div className="hidden lg:block">
        <Separator className={verticalClasses} orientation="vertical" />
      </div>
      <div className="block lg:hidden">
        <Separator className={horizontalClasses} />
      </div>
    </>
  );
};