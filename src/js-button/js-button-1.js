import { useState } from "react";
import { JsStyles } from "./js-styles"



export const JsButton1 = () => {
const [active, SetActive] = useState(false);

const JsButtonStyles1 ={
    ...JsStyles,

    color: active ? "#D6Ed17" : "#606060",
    backgroundColor: active ? "#606060" : "#D6Ed17",
}

    return <button 
        onClick={() => SetActive(!active)}
        style={JsButtonStyles1}
        >JsButton1</button>;
};