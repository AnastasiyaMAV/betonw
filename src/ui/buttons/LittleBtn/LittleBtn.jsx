import React from 'react';

import './LittleBtn.scss';

function LittleBtn({
  text,
  href,
  mainColor,
  bgcColor,
  addColor,
}) {
  return (
    <button
      type="button"
      className="littleBtn"
      style={{
        color: mainColor,
        borderColor: mainColor,
        backgroundColor: bgcColor,
        backgroundImage: `linear-gradient(45deg, ${addColor} 50%, transparent 50%)`,
      }}
    >
      <a
        href={href}
        style={{
          color: mainColor,
        }}
      >
        {text}
      </a>
    </button>
  );
}

export default LittleBtn;
