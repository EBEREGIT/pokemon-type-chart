import { Stack, Switch } from "@mui/material";
import { useContext } from "react";
import LabelComponent from "./label";
import { General } from "../../../stateManager/General";

export default function CountsAndPercentagesToggle() {
  const { setShowPercentage, showPercentage } = useContext(General);

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <LabelComponent label={"Count"} />

      <Switch
        checked={showPercentage}
        onChange={(e) => setShowPercentage(e.target.checked)}
      />

      <LabelComponent label={"Percentage"} />
    </Stack>
  );
}
