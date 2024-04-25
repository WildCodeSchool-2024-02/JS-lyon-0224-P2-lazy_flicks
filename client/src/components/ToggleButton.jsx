import { useContext } from "react";
import { LightModeContext } from "../Context/ThemeContext";

export default function ToggleButton() {
  const { lightMode, setLightMode } = useContext(LightModeContext);
  function toggleLightMode() {
    setLightMode(!lightMode);
  }

  return (
    <div className="checkbox-wrapper-5">
      <div className="check">
        <input id="check-5" type="checkbox" onClick={toggleLightMode} />
        <label htmlFor="check-5">
          <span className="clickCheck">Click</span>
        </label>
      </div>
    </div>
  );
}
