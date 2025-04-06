import axios from "axios";

export const HandleLogin = async (id, password, otp, role) => {

    try {
        const response = await axios.post("http://localhost:3000/login", {
            role: role,
            id: id,
            password: password,
            otp: otp
        });
        console.log(response.data.id);
    } catch (error) {
        console.error("서버 통신 오류:", error);
    }
};