import classNames from "classnames";
import "./file-button.css";
import { useState } from "react";

export const FileButton1 = () => {
const [active, SetActive] = useState(false);

    return <button 
        onClick={() => SetActive(!active)}
        className={classNames("file-button", "file-button-1", {active: active})}>FileButton1</button>;
};