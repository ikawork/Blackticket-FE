import React from "react";

import { doLogout } from "../../../utils/auth/action";
import { Button } from "../ui/button";

const LogOut = () => {
    return (
        <form action={doLogout}>
            <Button
                className="py-2.5 px-4 bg-default-primary hover:bg-default-secondary "
                type="submit"
            >
                Log Out
            </Button>
        </form>
    );
};

export default LogOut;
