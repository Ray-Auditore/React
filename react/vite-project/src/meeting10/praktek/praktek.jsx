import { useState } from "react";
import { useEffect } from "react";

const Counter4 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count saat ini ${count}`);
    });

    return (    
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    );
};
