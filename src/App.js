import { useState } from "react";
import clsx from "clsx";

import { useTooltip } from "./useTooltip";
import "./styles.css";

function BoxWithTooltip(props) {
  const { className, tooltipProps } = useTooltip({
    text: `I'm tooltip on box on ${props.placement}`,
    placement: props.placement,
    open: props.open
  });
  return (
    <div className={clsx("box", className)} {...tooltipProps}>
      Box {props.placement}
    </div>
  );
}

function BoxWithControlledTooltip(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((s) => !s)}>
        {open ? "close" : "open"}
      </button>
      <BoxWithTooltip {...props} open={open} />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 10 }}>
      <h1>Default</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BoxWithTooltip placement="top" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BoxWithTooltip placement="right" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BoxWithTooltip placement="bottom" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BoxWithTooltip placement="left" />
      </div>
      <hr />
      <h1>Controlled</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BoxWithControlledTooltip placement="top" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BoxWithControlledTooltip placement="right" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BoxWithControlledTooltip placement="bottom" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BoxWithControlledTooltip placement="left" />
      </div>
    </div>
  );
}
