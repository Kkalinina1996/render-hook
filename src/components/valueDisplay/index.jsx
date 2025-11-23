import React, { useRef, useEffect } from "react";
import "./styles.module.css";


export default function ValueDisplay({ value }) {
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <div className="values">
      <p><strong>Current Value:</strong> {value}</p>
      <p><strong>Previous Value:</strong> {prevRef.current} </p>
     
    </div>
  );
}
