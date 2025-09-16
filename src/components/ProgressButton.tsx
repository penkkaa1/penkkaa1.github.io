import { useState, useEffect, useRef } from "react";

const ProgressButton = () => {
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {

        intervalRef.current = window.setInterval(() => {
            setProgress((prev) => Math.max(0, prev - 1.5));
        }, 50);

        return () => {
            if (intervalRef.current !== null) clearInterval(intervalRef.current);
        };
    }, []);

    const handleClick = () => {
        setCount(count + 1);
        setProgress((prev) => {
            const increment = 10 * (1 - prev / 100);
            return Math.min(100, prev + increment);
        });
    };

    return (
        <button
            onClick={handleClick}
            style={{
                position: "relative",
                width: "200px",
                height: "48px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: `${progress}%`,
                    backgroundColor: "red",
                    transition: "width 0.1s linear",
                }}
            ></div>

            <span
                style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                Click Count is {count}
            </span>
        </button>
    );
};

export default ProgressButton;
