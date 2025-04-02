import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getAllUsers, userSignIn, userSignUp } from "../utils/auth/action";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

            authorization: {
                params: {
                    access_type: "offline",
                    prompt: "consent",
                    include_granted_scopes: "true",
                    response_type: "code",
                },
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log("Google SignIn Callback:");
            console.log("User:", user);
            console.log("Account:", account);
            console.log("Profile:", profile);

            const { name, email } = user;

            if (!email) {
                console.error("Email is missing. Cannot proceed.");
                return false;
            }

            const userName =
                typeof name === "string"
                    ? `${name.replace(/\s+/g, "")}_${Date.now()}`
                    : `defaultUsername_${Date.now()}`;

            try {
                const users = await getAllUsers();

                const userExists = users.some((existingUser) => existingUser.email === email);

                if (userExists) {
                    const userLoginData = {
                        email: email,
                        loginType: "google",
                    };
                    await userSignIn(userLoginData);
                    console.log("User logged in successfully.");
                } else {
                    const userRegisterData = {
                        username: userName,
                        email: email,

                        registrationType: "google",
                    };

                    await userSignUp(userRegisterData);
                }

                return true;
            } catch (error) {
                console.error("Error during Google sign-in:", error);
                return false;
            }
        },

        async session({ session }) {
            return session;
        },
    },
});
