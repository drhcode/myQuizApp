import { useRef } from "react";
import "./start.css";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input className="startInput" placeholder="Vendos Emrin" ref={inputRef} />
      <button className="startButton" onClick={handleClick}>
        Luaj
      </button>
    </div>
  );
}
