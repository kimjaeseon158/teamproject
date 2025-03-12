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
        if (error.response) {
            alert(error.response.data.message); // 서버에서 보낸 메시지
        } else {
            alert(`서버와 통신 중 오류가 발생했습니다`);
        }
        console.error("서버 통신 오류:", error);
    }
};