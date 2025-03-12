import axios from "axios";
import { useNavigate } from "react-router-dom";

export const HandleLogin = async (id, password, otp, role) => {

    try {
        const response = await axios.post("http://localhost:5000/login", {
            id: id,
            password: password,
            otp: otp,
            role: role
        });

        alert("로그인 성공!");

        navigate("/calender")
    } catch (error) {
        if (error.response) {
            alert(error.response.data.message); // 서버에서 보낸 메시지
        } else {
            alert(`서버와 통신 중 오류가 발생했습니다. `);
        }
        console.error("서버 통신 오류:", error);
    }
};