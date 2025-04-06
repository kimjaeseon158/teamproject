import axios from "axios";

export const HandleLogin = async (id, password, otp, role) => {

    try {
        const response = await axios.post("http://127.0.0.1:8000/api/items/", {
            role: role,
            id: id,
            password: password,
            otp: otp
        });
        
    } catch (error) {
        console.error("서버 통신 오류:", error);
    }
};