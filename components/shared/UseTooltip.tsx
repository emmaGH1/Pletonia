import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { ReactNode } from "react";

  interface Props {
    trigger: ReactNode,
    tip: string
  }

const UseTooltip = ({trigger, tip}: Props) => {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>{trigger}</TooltipTrigger>
            <TooltipContent>
            <p>{tip}</p>
            </TooltipContent>
        </Tooltip>
   </TooltipProvider>

  );
};

export default UseTooltip;