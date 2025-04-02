import { loginDataTypes, LoginFormValues, loginSchema } from "@/lib/types/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { userSignIn } from "../../../../utils/auth/action";
import { useModal } from "@/context/ModalContext";
import { toast } from "react-toastify";

const useLogin = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),

        mode: "onChange",
    });
    const { closeSignInModal, openSignUpModal, isSignInModalOpen } = useModal();

    const { mutate } = useMutation({
        mutationFn: async (formData: loginDataTypes) => {
            return await userSignIn(formData);
        },
        onSuccess: async () => {
            toast.success("User Loged In successfully");
            closeSignInModal();
        },
        onError: () => {
            toast.error("Error Loggin User");
            closeSignInModal();
        },
    });

    const onSubmitHandler = async (data: LoginFormValues) => {
        const loginFormData = {
            email: data.email,
            password: data.password,
            loginType: "standard",
        };

        mutate(loginFormData);
    };
    return {
        register,
        handleSubmit,
        errors,
        isSignInModalOpen,
        closeSignInModal,
        openSignUpModal,
        onSubmitHandler,
    };
};

export default useLogin;
