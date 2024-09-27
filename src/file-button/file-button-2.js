import classNames from "classnames";
import "./file-button.css";
import { useState } from "react";

export const FileButton2 = () => {
const [active, SetActive] = useState(false);

    return <button 
        onClick={() => SetActive(!active)}
        className={classNames("file-button", "file-button-2", {active: active})}>FileButton2</button>;
};