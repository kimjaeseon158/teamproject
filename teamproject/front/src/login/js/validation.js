export const validation = ({ id, password, otp, role , rgxCnd, setErrors, setId, setPassword, setOtp, setRole }) => {
    const testData = [
        { role: "admin", id: "rlawotjs158", password: "1234", otp: "123456" },
        { role: "staff", id: "rlawotjs158", password: "1234" }
    ];

    const user = testData.find(
            (user) => user.role === role && user.id === id && user.password === password
        );
        //user 는 testData 의 각요소를 뜻함 즉 객체의 변수를 지칭함 
        if (user) {
            if (role === "admin" && user.otp !== otp) {
                setErrors((prev) => ({ ...prev, otpError: "잘못된 OTP 코드입니다." }));
                return;
            }
            alert(`${id},${password}`);
        } else {
            setErrors((prev) => ({ ...prev, idError: "아이디 또는 비밀번호가 틀렸습니다." }));
    }

    const idRegex = role === "admin" ? rgxCnd.adminId : rgxCnd.staffId;
    const passwordRegex = role === "admin" ? rgxCnd.adminPassword : rgxCnd.staffPw;
    const otpRegex = role === "admin" ? rgxCnd.adminOtp : null;  // 사원은 OTP 검증하지 않음

    const newErrors = {
        idError: idRegex.test(id) ? "" : "아이디를 잘못 입력하셨습니다",
        passwordError: passwordRegex.test(password) ? "" : "비밀번호를 잘못 입력하셨습니다",
        otpError: otpRegex && otp ? otpRegex.test(otp) ? "" : "인증코드를 잘못 입력하셨습니다" : "" 
    };
    
    setErrors(newErrors);

    console.log("입력된 아이디:", id);
    console.log("입력된 비밀번호:", password);
    console.log("오티피:", otp);
    setId("");
    setPassword("");
    setOtp("");
};
