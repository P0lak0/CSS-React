import { useState } from "react";
import { JsStyles } from "./js-styles"

export const JsButton2 = () => {
const [active, SetActive] = useState(false);

 const JsButtonStyles2 ={
    ...JsStyles,
    
    color: active ? "#FEE715" : "#101820",
    backgroundColor: active ? "#101820" : "#FEE715",
}

    return <button 
        onClick={() => SetActive(!active)}
        style={JsButtonStyles2}
        >JsButton2</button>;
};