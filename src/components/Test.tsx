"use client";

import React, { useRef, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseVar = () => {
    setCount(count + 1);
    countRef.current += 1;
  };

  return (
    <div>
      <p>State count: {count} </p>
      <p>Ref count: {countRef.current} </p>
      <Button increaseCount={increaseVar} />
    </div>
  );
};

const Button = ({ increaseCount }: { increaseCount: () => void }) => {
  return <button onClick={increaseCount}>Var올려</button>;
};

export default Test;
