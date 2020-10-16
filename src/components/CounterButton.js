import React, { memo, useState } from "react";

const Header = ({ color }) => {
  const [count, updateCount] = useState(0);
  return (
    <button id="counter" color={color} onClick={() => updateCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default memo(Header);
