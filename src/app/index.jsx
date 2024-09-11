import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import api from "../class/api";
import { useNavigate } from "react-router-dom"; // Để chuyển sang /home
import qs from 'qs';  // Để chuyển đổi dữ liệu đối tượng thành chuỗi URL-encoded

function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Trạng thái thông báo lỗi
  const navigate = useNavigate();
  try {
    window.electron.send("resize",false);
  } catch(e){
  
  }
  const client_secret="ZOftAFxAiGjTRGq7gv6maDONnyTjYUO3XnLImvMdUJbzC0Zxc7ofkwfOCJUWwC8cLwMi5cgEm1bnwKo6ApDiXYBDYJUDNUNmv9bFJWRUjDMzSg6hoRmEl2nM2BHNnxCJ";
  const client_id="WKaWvGthBMD8boZQJuzgBrCOR8wVvymnF5DwYjVv";
  // Hàm kiểm tra và lấy thông tin người dùng
  const checkTokenAndLogin = async () => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const response = await api.get("/user/", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const userData = response.data;
        if (userData) {
          navigate("/home"); // Chuyển sang trang /home nếu có dữ liệu user
        }
      } catch (e) {
        console.error("Token không hợp lệ hoặc không có dữ liệu người dùng");
      }
    }
  };

  // Kiểm tra token khi load trang
  useEffect(() => {
    checkTokenAndLogin();
    const savedUsername = Cookies.get("username");
    const savedPassword = Cookies.get("password");
    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword); // Gán giá trị lưu trong cookie vào input
    }
  }, []);

  // Hàm xử lý đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Xóa thông báo lỗi trước khi gửi yêu cầu mới
    Cookies.set("username", username, { expires: 365 * 10 }); // Lưu username và password vào cookie
    Cookies.set("password", password, { expires: 365 * 10 });
    try {
      const response = await api.post("/login/",qs.stringify({
        grant_type:"password",
        username:username,
        password:password,
        client_id:client_id,
        client_secret:client_secret,
      }),{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }});
      const token = response.data.access_token;
      if (token) {
        Cookies.set("token", token,{
          expires:(response.data.expires_in/(3600*24))
        }); // Lưu token vào cookie
        navigate("/home"); // Điều hướng sang trang /home
      }
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
      setErrorMessage("Tên đăng nhập/mật khẩu không đúng."); // Cập nhật thông báo lỗi
    }
  };

  const handleExit = () => {
    try {
      window.electron.send("exit");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="login-container">
      <div className="left-nav">
        <div className="box-show"></div>
      </div>
      <div className="login-box">
        <div className="login-inset">
          <div className="app-name">App</div>
          <div className="wellcome">Chào mừng quay trở lại</div>
          <div className="message">Đăng nhập bằng tài khoản của bạn</div>
          <form className="form" onSubmit={handleLogin}>
            <div className="items">
              <label htmlFor="email">Tài khoản</label>
              <input
                type="text"
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="items">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div> // Hiển thị thông báo lỗi nếu có
            )}
            <div>
              <a className="text-sm text-[#7747ff]" href="#">
                Quên mật khẩu?
              </a>
            </div>
            <button type="submit">Truy cập</button>
          </form>
          <div className="text-sm text-center mt-[1.6rem]">
            Đăng nhập bằng{" "}
            <a className="text-sm text-[#7747ff]" href="#">
              Zalo
            </a>{" "}
            ?
          </div>
          <div className="text-sm text-center mt-[0.5rem]">
            <a className="exit" href="#" onClick={handleExit}>
              Thoát
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
