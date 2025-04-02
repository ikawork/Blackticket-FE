import { createContext, useContext, useState } from "react";
import { ModalContextType } from "./type";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("use useModal inside ModalProvider");
    }
    return context;
};

type ModalProviderProps = {
    children: React.ReactNode;
};

const ModalProvider = (props: ModalProviderProps) => {
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

    const openSignUpModal = () => {
        setIsSignUpModalOpen(true);
        setIsSignInModalOpen(false);
    };

    const openSignInModal = () => {
        setIsSignInModalOpen(true);
        setIsSignUpModalOpen(false);
    };

    const closeSignInModal = () => {
        setIsSignInModalOpen(false);
    };

    const closeSignUpModal = () => {
        setIsSignUpModalOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                isSignUpModalOpen,
                isSignInModalOpen,

                openSignUpModal,
                closeSignUpModal,
                openSignInModal,
                closeSignInModal,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};
export default ModalProvider;
