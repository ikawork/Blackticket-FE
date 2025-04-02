"use client";

import React from "react";
import { GoGlobe } from "react-icons/go";

import { AnimateLink } from "./animationHelpers/MotionLink";

import LoginModal from "./auth/LogIn";
import LogOut from "./auth/LogOut";
import { useModal } from "@/context/ModalContext";
import Register from "./auth/Register";
import { Button } from "./ui/button";
import { Session } from "next-auth";

export type HeaderTypes = {
    session: Session | null;
};

const Header = ({ session }: HeaderTypes) => {
    console.log(session);
    const { openSignInModal } = useModal();

    return (
        <header className="sticky z-50 top-0 h-[83px] w-full px-[90px] py-4 flex justify-between items-center  bg-primary-bg border-b border-b-[#7d7d8040] ">
            <div>
                <h1 className="text-default-primary font-bold text-lg">BiletHub</h1>
            </div>
            <div className="flex justify-center items-center gap-9">
                <div className="h-10 w-10 rounded-full border border-gray-700 flex justify-center items-center hover:bg-[#6D6F7433] hover:border-[#6D6F744D] transition-colors duration-200 ease-in-out cursor-pointer">
                    <GoGlobe className="text-lg" />
                </div>
                <AnimateLink href="/sell-ticket">Sell Tickets</AnimateLink>
                {!session?.user && (
                    <>
                        <Button
                            className="py-2.5 px-4 bg-default-primary hover:bg-default-secondary "
                            onClick={openSignInModal}
                        >
                            Log in
                        </Button>
                        <LoginModal callFromHeader={true} />
                        <Register />
                    </>
                )}

                {session?.user && <LogOut />}
            </div>
        </header>
    );
};

export default Header;
