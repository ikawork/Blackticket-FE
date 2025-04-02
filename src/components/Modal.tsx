import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    btnText: string;
    onClose: () => void;
    callFromHeader?: boolean;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    const handleOpenChange = (isOpenState: boolean) => {
        // Trigger onClose only when modal is being explicitly closed
        if (!isOpenState) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className="flex justify-center flex-col items-center py-12 px-10 md:rounded-[28px]  ">
                <DialogHeader>
                    <DialogTitle className="mb-16 text-3xl font-sans">Sign up Bilethub</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
