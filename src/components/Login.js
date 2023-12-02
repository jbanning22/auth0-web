import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const {
        loginWithRedirect,
        isAuthenticated,
        isLoading,
        getAccessTokenSilently,
    } = useAuth0();

    useEffect(() => {
        const checkSession = async () => {
            if (!isAuthenticated && !isLoading) {
                try {
                    await getAccessTokenSilently();
                    console.log(
                        "Successfully retrieved the access token silently"
                    );
                } catch (e) {
                    // Logging the error
                    console.error(
                        "Error during silent authentication:",
                        e.error,
                        e.error_description
                    );

                    // Redirect to login
                    loginWithRedirect();
                }
            }
        };
        checkSession();
    }, [isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {isAuthenticated ? (
                <div>User is authenticated</div>
            ) : (
                <button onClick={loginWithRedirect}>Login</button>
            )}
        </div>
    );
}

export default Login;
