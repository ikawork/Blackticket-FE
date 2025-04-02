export type registerDataTypes = {
    username: string;
    email: string;
    password: string;
};

export type LoginFormDataTypes = {
    email: string;
    password?: string;
    loginType?: string;
};

export type LoginModalProps = {
    callFromHeader?: boolean;
};
