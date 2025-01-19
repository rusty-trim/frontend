"use client";

import { useCallback, useEffect, useRef } from "react";

export default function ChatInput() {

  const ref = useRef<HTMLDivElement>(null);

  const adjustHeight = useCallback(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [])

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <form className="app__chatinput--wrapper">
      <div className="app__chatinput--container">
        <div ref={ref} className="app__chatinput--input" aria-placeholder="Message #blbabla" onKeyDown={adjustHeight} role="textarea" contentEditable>

        </div>
      </div>
    </form>
  )
}
