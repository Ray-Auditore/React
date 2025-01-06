import React, { useState } from "react";

function Array2() {
    const [array, setArray] = useState(["React,", "Javascript", "CSS"]);   
    return (
        <h1>{array}</h1>
    )
}

export default Array2