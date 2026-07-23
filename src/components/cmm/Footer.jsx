function Footer() {
    return (
        <footer style={{ display: 'flex', gap: '10px' }}>
            <div
                className="footer-content"
                style={{
                    flex: 1,
                    backgroundColor: '#ffb6d9',
                    display: 'flex',
                    width: '400px',
                    height: '150px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p>&copy; 클라이언트 요청링크</p>
            </div>
            <div
                className="footer-content"
                style={{
                    flex: 1,
                    width: '400px',
                    height: '150px',
                    backgroundColor: '#e6d7f0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p>&copy; madeby 크레페 홍보링크</p>
            </div>
        </footer>
    );
}

export default Footer;
