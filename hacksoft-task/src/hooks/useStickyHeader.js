import { useEffect, useState } from 'react';

const useStickyHeader = () => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isSticky;
};

export default useStickyHeader;
