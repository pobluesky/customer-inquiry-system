export async function login({ id, password }) {
    try {
        const response = await fetch(`/api/customers/sign-in`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, password })
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

// export async function login({ id, password }) {
//     try {
//         const response = await fetch(`/api/customers/sign-up`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ id, password })
//         });

//         if (response.ok) {
//             const data = await response.json();
//             return {
//                 success: true,
//                 data
//             };
//         } else {
//             // 서버 에러코드에 따라 에러처리
//             return { success: false, message: "Login failed" };
//         }
//     } catch (error) {
//         console.error("Login error:", error);
//         return { success: false, message: error.toString() };
//     }
// }