import React from "react";
const Footer = () => {
    return(
        <footer id="footer" role="contentinfo">
            <div className="footer_inner">
                <div className="footer_text">
                    <span>Park su hyeon</span>
                    <span>© eon</span>
                </div>
                <div className="footer_info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글과 개시판 기능을 이용할 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/@Aube-gm3sq">youtube</a>
                                <em>유튜브에 오시면 더 많은 강의를 볼 수 있습니다.</em>
                            </li>
                            <li>
                                <a href="https://github.com/BloomNyx?tab=repositories">github</a>
                                <em>github에 오시면 모든 소스를 볼 수 있습니다.</em>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_right">
                    © 2025 Park su hyeon<br/>
                    이 사이트는 React를 이용하여 제작되었습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer;