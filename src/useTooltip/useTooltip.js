import clsx from "clsx";
import { isNil } from "lodash-es";
import "./styles.css";

export const tooltipClasses = {
  root: "with-tooltip",
  activateOnHover: "with-tooltip--hover",
  activateOn: "with-tooltip--active",
  restrictWidth: "with-tooltip--no-overflow-container",
  placement: {
    top: "with-tooltip--top",
    bottom: "with-tooltip--bottom",
    left: "with-tooltip--left",
    right: "with-tooltip--right"
  }
};

export function useTooltip({
  text,
  placement = "top",
  open,
  noOverflowContainer = false
}) {
  return {
    className: clsx({
      [tooltipClasses.root]: true,
      [tooltipClasses.activateOnHover]: isNil(open),
      [tooltipClasses.activateOn]: open,
      [tooltipClasses.noOverflowContainer]: noOverflowContainer,
      [tooltipClasses.placement[placement]]: placement
    }),
    tooltipProps: {
      "data-tooltip": text
    }
  };
}
