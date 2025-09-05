import { useState } from "react";
import "../style.css";

const BackgroundToggle = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const [textColor, setTextColor] = useState("#1b1b1b");

  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa20a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "#white");
  };

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `5px solid ${textColor}`,
        }}
      >
        {backgroundColor == "#1b1b1b" ? "Dark Theme" : "Light Theme"}
      </button>

      <section className="content">
        <h1>
          Welcome To A <br />
          Real World...
        </h1>
      </section>
    </div>
  );
};
export default BackgroundToggle;
