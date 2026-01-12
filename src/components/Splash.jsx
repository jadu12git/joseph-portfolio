import React, { useEffect } from "react";

export default function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1800); // 1.8 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <h1 className="splash-title">Joseph Adu</h1>
      <p className="splash-subtitle">Building. Creating. Innovating.</p>
    </div>
  );
}
