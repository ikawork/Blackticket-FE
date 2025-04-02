import { registerSchema, RegistrationFormValues } from "@/lib/types/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { userSignUp } from "../../../../utils/auth/action";
import { registerDataTypes } from "../types";
import { useModal } from "@/context/ModalContext";

const useRegister = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<RegistrationFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            agreeToPrivacyPolcy: false,
        },
        mode: "onChange",
    });
    const { isSignUpModalOpen, closeSignUpModal, openSignInModal } = useModal();

    const { mutate } = useMutation({
        mutationFn: async (formData: registerDataTypes) => {
            return await userSignUp(formData);
        },
        onSuccess: () => {
            toast.success("User created successfully");
            console.log("User created successfully");
            closeSignUpModal();
        },
        onError: (error) => {
            console.error("Error creating User:", error);
            toast.error("Error creating User");
            closeSignUpModal();
        },
    });

    const onSubmitHandler = async (data: RegistrationFormValues) => {
        const registerData = {
            username: data.username,
            email: data.email,
            password: data.password,
        };

        mutate(registerData);
    };

    return {
        register,
        handleSubmit,
        setValue,
        watch,
        errors,
        isSignUpModalOpen,
        closeSignUpModal,
        openSignInModal,
        onSubmitHandler,
    };
};

export default useRegister;
