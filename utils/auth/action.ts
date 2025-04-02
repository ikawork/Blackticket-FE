"use server";
import axios from "axios";
import { signIn, signOut } from "@/auth";
import { loginDataTypes, registerDataTypes } from "@/lib/types/registerSchema";

import { Users } from "@/lib/types/users";
import axiosInstance from "../axios";

export const userSignUp = async (data: registerDataTypes): Promise<void> => {
    try {
        const response = await axiosInstance.post("/Users/register", data);
        return response.data;
    } catch (error) {
        console.error("Error creating User:", error);
        throw error;
    }
};

export const userSignIn = async (data: loginDataTypes): Promise<void> => {
    console.log(data);
    try {
        const response = await axiosInstance.post("/Users/login", data);

        return response.data;
    } catch (error) {
        console.error("Error creating User:", error);
        throw error;
    }
};

export const getAllUsers = async (): Promise<Users> => {
    try {
        const response = await axiosInstance.get("/Users");

        return response.data as Users;
    } catch (error) {
        console.error("Error creating User:", error);
        throw error;
    }
};

export const getCurrentUser = async (): Promise<void> => {
    try {
        const response = await axios.get("Users/profile");

        return response.data;
    } catch (error) {
        console.error("Error creating User:", error);
        throw error;
    }
};

export const doSocialLogin = async (data: FormData): Promise<void> => {
    data.get("action");
    await signIn("google");
};

export const doLogout = async () => {
    await signOut({ redirectTo: "/" });
};
