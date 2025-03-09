"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="bg-gray-700">
      {counter}
      <Button onClick={() => setCounter(counter + 1)}>Click</Button>
    </div>
  );
};
