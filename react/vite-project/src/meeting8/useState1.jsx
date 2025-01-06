import {useState} from "react";

function Numbers() {
    const [count, setCount] = useState(16);
    return (
        <div>
            <h1>Count: {count}</h1>

        </div>
    );
}
export default Numbers