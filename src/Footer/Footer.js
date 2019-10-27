import React from 'react';
import "./Footer.css";

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <img src="./images/footer.jpg"/>
               <div className="top">
                    <div className="gt">
                        <h1>Giới thiệu</h1>
                        <p><i class="fas fa-angle-right"></i> About</p>
                        <p><i class="fas fa-angle-right"></i> Chính sách bảo mật</p>
                        <p><i class="fas fa-angle-right"></i> Sơ đồ website</p>
                    </div>
                    <div className="gt">
                        <h1>Hỗ trợ</h1>
                        <p><i class="fas fa-angle-right"></i> Contact</p>
                        <p><i class="fas fa-angle-right"></i> Điện thoại liên hệ</p>
                        <p style={{fontWeight:"bold", fontSize:"20px", marginTop:"3px"}}>123456789</p>
                    </div>
                    <div id="ic" className="gt">
                        <h1>Kết nối</h1>
                        <p><i class="fab fa-facebook-square"></i></p>
                        <p><i class="fab fa-youtube"></i></p>
                        <p><i class="fab fa-instagram"></i></p>
                    </div>
               </div>

               <div className="bot">
                    <p><i class="fas fa-home"></i> K146/59 Phan Văn Định, Liên Chiểu, Đà Nẵng</p>
               </div>
            </div>
        );
    }
}
export default Footer;