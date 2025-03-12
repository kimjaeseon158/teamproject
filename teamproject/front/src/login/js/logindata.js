import axios from "axios";
<<<<<<< HEAD
// import { useNavigate } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 43e5ec57da1c2a0fee14d8ed39d99f418504bcb9

export const HandleLogin = async (id, password, otp, role) => {

    try {
<<<<<<< HEAD
        const response = await axios.post("http://localhost:3000/login", {
            role: role,
            id: id,
            password: password,
            otp: otp
        });
        console.log(response.data.id);
        // navigate("/calender")
=======
        const response = await axios.post("http://localhost:5000/login", {
            id: id,
            password: password,
            otp: otp,
            role: role
        });

        alert("로그인 성공!");

        navigate("/calender")
>>>>>>> 43e5ec57da1c2a0fee14d8ed39d99f418504bcb9
    } catch (error) {
        if (error.response) {
            alert(error.response.data.message); // 서버에서 보낸 메시지
        } else {
<<<<<<< HEAD
            alert(`서버와 통신 중 오류가 발생했습니다`);
=======
            alert(`서버와 통신 중 오류가 발생했습니다. `);
>>>>>>> 43e5ec57da1c2a0fee14d8ed39d99f418504bcb9
        }
        console.error("서버 통신 오류:", error);
    }
};