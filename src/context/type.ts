export type ModalContextType = {
    isSignUpModalOpen: boolean;
    isSignInModalOpen: boolean;

    openSignUpModal: () => void;
    closeSignUpModal: () => void;
    openSignInModal: () => void;
    closeSignInModal: () => void;
};
