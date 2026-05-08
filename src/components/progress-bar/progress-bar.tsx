import { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // Function to calculate scroll progress
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY; // Current scroll position
            const docHeight = document.documentElement.scrollHeight; // Document height
            const winHeight = window.innerHeight; // Window height
            const scrollHeight = docHeight - winHeight; // Total scrollable height

            // Calculate the progress as a percentage
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollProgress(progress);
        };

        // Add event listener for scroll
        window.addEventListener('scroll', updateScrollProgress);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);
    return (
        <div className='fixed top-0 left-0 w-full h-1 bg-white z-[1000]'>
            <div
                className='h-full bg-primary'
                style={{
                    width: `${scrollProgress}%`
                }}
            ></div>
        </div>
    );
}

export default ProgressBar;
