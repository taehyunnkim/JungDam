import cesco from '../../images/cesco.png';
import canada from '../../images/canada.png';

function Footer() {
    return(
        <footer>
            <div className="container">
                <div className="footer">
                    <ul>
                        <li>대표이사: 김성일</li>
                        <li>사업자등록번호 617-81-93155</li>
                        <li>Fax. 051-782-0779</li>
                        <li>Mail hjae1234@naver.com</li>
                        <li>부산광역시 해운대구 해운대로 161번길 31, 1층</li>
                        <li>Tel. 051-782-3630 / 051-627-4282</li>
                    </ul>
                    <div>
                        <img src={cesco} alt="Cesco Member" />
                        <p>세스코멤버스</p>
                        <img src={canada} alt="Food Safety Certificate" />
                        <p>식품위생 안전취급 <br/> 캐나다인증</p>
                    </div>
                    <p>Copyright © 정담도시락.com &nbsp;&nbsp;&nbsp;&nbsp; 2021 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;