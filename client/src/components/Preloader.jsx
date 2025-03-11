import { useEffect, useState } from "react";

const Preloader = ({ setLoading }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Simulate loading effect
        const timer = setTimeout(() => {
            setVisible(false);
            setLoading(false); // Notify App that loading is done
        }, 1500); // Adjust timing if necessary

        return () => clearTimeout(timer);
    }, [setLoading]);

    if (!visible) return null;

    return (
        <div className="preloader-wrapper">
            <div className="preloader"></div>
        </div>
    );
};

export default Preloader;
