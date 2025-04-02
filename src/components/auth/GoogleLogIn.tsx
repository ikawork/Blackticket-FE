import React from "react";
import { doSocialLogin } from "../../../utils/auth/action";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";

const GoogleLogIn = () => {
    return (
        <form action={doSocialLogin}>
            <Button
                type="submit"
                name="action"
                value="google"
                className="w-13   bg-dark h-10 py-3 px-4 my-5  border border-[#6d6f742f] rounded-xl"
                size="icon"
            >
                <FaGoogle />
            </Button>
        </form>
    );
};

export default GoogleLogIn;
