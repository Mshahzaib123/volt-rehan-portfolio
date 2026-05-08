import React, { useState, useEffect } from 'react';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import TitleComponent from '../title-component/title-component';

interface MarqueeProps {
    items: { text: string; icon?: boolean }[];
    className?: string;
    speed?: number;
    direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({ items, className, speed = 30, direction: initialDirection = 'left' }) => {
    const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>(initialDirection);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (timeout) clearTimeout(timeout);

            timeout = setTimeout(() => {
                if (currentScrollPos > prevScrollPos) {
                    setScrollDirection(initialDirection);
                } else if (currentScrollPos < prevScrollPos) {
                    setScrollDirection((prev) => (prev === 'left' ? 'right' : 'left'));
                }

                setPrevScrollPos(currentScrollPos);
            }, 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            if (timeout) clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, initialDirection]);

    const marqueeContainerStyle: React.CSSProperties = {
        animation: `${scrollDirection === 'left' ? 'marquee-left' : 'marquee-right'} ${speed}s linear infinite`,
        display: 'inline-flex',
        gap: '40px',
        whiteSpace: 'nowrap',
        willChange: 'transform',
    };

    const iconStyle: React.CSSProperties = {
        transition: 'transform 0.5s ease',
        transform: scrollDirection === 'right' ? 'rotate(180deg)' : 'rotate(0deg)',
    };

    return (
        <div className={`overflow-hidden relative w-full whitespace-nowrap ${className || ''}`}>
            <ul style={marqueeContainerStyle} className="inline-flex items-center">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center gap-4 min-w-fit">
                        <TitleComponent type="p" size='base' className="text-[14px] text-white leading-[150%] font-bold uppercase">
                            {item.text}
                        </TitleComponent>
                        {item.icon && (
                            <div style={iconStyle}>
                                <StarBorderPurple500Icon className="icon" />
                            </div>
                        )}
                    </li>
                ))}
                {items.map((item, index) => (
                    <li key={`duplicate-${index}`} className="inline-flex items-center gap-4 min-w-fit">
                        <TitleComponent type="p" size='base' className="text-[14px] text-white leading-[150%] font-bold uppercase">
                            {item.text}
                        </TitleComponent>
                        {item.icon && (
                            <div style={iconStyle}>
                                <StarBorderPurple500Icon className="icon" />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <style>
                {`
                    @keyframes marquee-left {
                        from {
                            transform: translateX(0%);
                        }
                        to {
                            transform: translateX(-50%);
                        }
                    }

                    @keyframes marquee-right {
                        from {
                            transform: translateX(-50%);
                        }
                        to {
                            transform: translateX(0%);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Marquee;