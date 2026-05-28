import { useContext } from "react";
import { Outlet, Navigate } from "react-router";

import FirebaseAuthContext from "@/contexts/FirebaseAuthContext";

export default function NoAuthLayout() {
    const { authState } = useContext(FirebaseAuthContext)!;
    const { isAuth } = authState;

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
}
