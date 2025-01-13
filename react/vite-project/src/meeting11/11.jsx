import { useState, useEffect } from "react";

function useOnlineStatus(initialState = true) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const handleOnline = () => setState(true);
        const handleOffline = () => setState(false);

        // Add event listeners for online and offline events
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Set initial state based on navigator.onLine
        setState(navigator.onLine);

        // Cleanup event listeners when the component unmounts
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return state; // Return the current online status
}

export function StatusBar() {
    const isOnline = useOnlineStatus(); // Use the custom hook

    return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

    

