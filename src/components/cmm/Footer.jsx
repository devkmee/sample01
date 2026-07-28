import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer
            style={{
                display: 'flex',
                gap: '10px',
                marginTop: '100px',
                cursor: 'pointer',
                flexDirection: 'none',
            }}
        >
            <Link to="https://crepe.cm/ko" style={{ textDecoration: 'none', marginLeft: '300px', color: 'black' }}>
                <>
                    <h5>made by.당신의 페이지</h5>
                    <p>© 2024. All rights reserved. | @devkmee</p>
                    <p>여기를 클릭해서 크레페에서 당신의 홈페이지를 주문하세요.</p>
                </>
            </Link>
        </footer>
    );
}

export default Footer;
