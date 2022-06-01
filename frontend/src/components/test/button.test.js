import React from "react";
import { ReactDOM } from "react";
import Button from "../button";

it("render without crashing" ,()=>{
    const div=document.createElement("div");
    ReactDOM.render(<Button></Button>,div)
}

)