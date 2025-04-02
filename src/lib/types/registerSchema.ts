import * as z from "zod";

export const registerSchema = z
    .object({
        username: z
            .string()
            .min(3, "Username must be at least 3 characters long")
            .regex(/^\S+$/, "Username must not contain spaces"),
        email: z.string().email("Invalid email adress"),
        password: z
            .string()
            .min(5, "Password must be at least 5 characters long")
            .regex(
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/,
                "Password must contain at least one uppercase letter, one number, and one special character",
            ),
        confirmPassword: z.string().min(5, "Password confirmation is required"),
        agreeToPrivacyPolcy: z
            .boolean()
            .refine((value) => value, { message: "Agree terms and rules to continue process" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type RegistrationFormValues = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email: z.string().email("Invalid email adress"),
    password: z.string().min(5, "Password must be at least 5 characters long"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export type registerDataTypes = {
    username: string;
    email: string;
    password?: string;
    registrationType?: string;
};

export type loginDataTypes = {
    email: string | null | undefined;
    password?: string | null | undefined;
    loginType?: string;
};
