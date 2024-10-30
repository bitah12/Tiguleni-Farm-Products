import * as React from "react";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);

    if (!event.target.checked) {
      navigate("/");
    }
  };

  return (
    <Switch
      className="rotate-180 "
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
      required
    />
  );
}
