"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useModal from "@/hooks/useModal";
import { useState } from "react";

const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const [showModal, toggleModal, modalRef] = useModal();

    const togglePasswordVisibility = (): void => {
        setShowPassword(!showPassword);
    };

    const toggleRememberMe = (): void => {
        setRememberMe(!rememberMe);
    };

    return (
        <div className="text-center">
            <button
                onClick={toggleModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                Sign Up
            </button>

            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900 bg-opacity-20 backdrop-blur-md backdrop-filter flex items-center justify-center rounded-3xl "
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.8, opacity: 0, y: -130 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 130 }}
                            style={{
                                border: "2px solid rgba(109, 111, 116, 0.3)",
                            }}
                            className="relative bg-primary shadow-lg p-6 w-full max-w-md rounded-3xl"
                        >
                            <h2
                                style={{ fontFamily: "Montserrat" }}
                                className="text-2xl mt-5 font-medium leading-[34.13px] text-center text-white mb-4 decoration-none decoration-skip-ink pr-10  pl-10 "
                            >
                                Sign in Bilethub
                            </h2>

                            <form className="space-y-4 mt-8">
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full mt-1 p-2 border bg-dark border-[rgba(109,111,116,0.26)] rounded-2xl focus:ring-0 focus:outline-none focus:border-[rgba(109,111,116,0.26)]"
                                        style={{
                                            fontFamily: "Montserrat",
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            lineHeight: "21.94px",
                                            textAlign: "left",
                                            textUnderlinePosition: "from-font",
                                            paddingTop: "10px",
                                            paddingRight: "20px",
                                            paddingBottom: "10px",
                                            paddingLeft: "20px",
                                        }}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="w-full mt-1 p-2 border bg-dark border-[rgba(109,111,116,0.26)] rounded-2xl focus:ring-0 focus:outline-none focus:border-[rgba(109,111,116,0.26)]"
                                        style={{
                                            fontFamily: "Montserrat",
                                            fontSize: "18px",
                                            fontWeight: 400,
                                            lineHeight: "21.94px",
                                            textAlign: "left",
                                            textUnderlinePosition: "from-font",
                                            paddingTop: "10px",
                                            paddingRight: "20px",
                                            paddingBottom: "10px",
                                            paddingLeft: "20px",
                                        }}
                                        placeholder="Password"
                                    />

                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        onClick={togglePasswordVisibility}
                                        className="absolute top-4 right-3 text-gray-500 cursor-pointer"
                                    />
                                </div>

                                <div className="flex items-center justify-between mt-2">
                                    <label className="flex items-center text-sm text-white">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={toggleRememberMe}
                                            className="mr-2 hidden-checkbox"
                                        />
                                        <span className="custom-checkbox text-gray-200"></span>
                                        Remember Me
                                    </label>
                                    <button
                                        type="button"
                                        className="font-montserrat text-base font-normal leading-[19.5px] text-left decoration-skip-ink-none text-gray-200"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    style={{ marginTop: "45px", padding: "12px" }}
                                    className="w-full bg-[rgba(226,24,54,1)] text-white py-2 rounded-xl hover:bg-[rgba(180,18,44,1)] transition font-[Montserrat] text-[20px] font-[500] leading-[24.38px]  underline-offset-[from-font] decoration-[none]"
                                >
                                    Sign In
                                </button>
                            </form>

                            <div className="my-4 flex items-center justify-center">
                                <hr className="w-1/3 border-t border-gray-300" />
                                <span className="mx-2 text-gray-500">or</span>
                                <hr className="w-1/3 border-t border-gray-300" />
                            </div>

                            <div className="flex items-center justify-center mt-4">
                                <button
                                    className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition"
                                    onClick={() => alert("Sign up with Google")}
                                >
                                    <FontAwesomeIcon
                                        icon={faGoogle}
                                        className="mr-2 text-lg bg-[rgba(109,111,116,0.14)] p-3 rounded-xl ml-2"
                                    />
                                </button>
                            </div>

                            <p className="mt-4 text-center text-gray-500 font-montserrat text-base leading-6">
                                Don&apos;t have an account?
                                <button
                                    onClick={toggleModal}
                                    className="font-montserrat text-[16px] font-medium leading-[19.5px] text-center underline-from-font decoration-skip-ink-none text-gray-200 ml-2"
                                >
                                    Sign Up
                                </button>
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Register;
