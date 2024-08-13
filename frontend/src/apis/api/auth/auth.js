export const signInApi = async( email, password ) => {
    try {
        const response = await fetch('/api/customers/sign-in', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            return {
                success: true,
                data
            };
        } else {
            return { success: false, message: "Login failed" };
        }
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: error.toString() };
    }
}

export const signUpApi = async( name, customerCode, customerName, roles, email, phone, password ) => {
    try {
        const response = await fetch('/api/customers/sign-up', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, customerCode, customerName, roles, email, phone, password })
        });

        if (response.ok) {
            const data = await response.json();
            return {
                success: true,
                data
            };
        } else {
            return { success: false, message: "Login failed" };
        }
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: error.toString() };
    }
}
