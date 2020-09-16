import React, { memo } from "react";
import CounterButton from "./CounterButton";

const Header = () => {
    return (
        <div>
            <h1>Robofriends</h1>
            <CounterButton color={"red"} />
        </div>
    )
}

export default memo(Header);