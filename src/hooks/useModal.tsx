import { useState, useRef, useEffect } from "react";

const useModal = (): [boolean, () => void, React.RefObject<HTMLDivElement>] => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const toggleModal = (): void => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return [isVisible, toggleModal, modalRef];
};

export default useModal;
