function Header({ handleSearchKeyword }) {
    const searchInputHandler = (evt) => {
        if (evt.key === 'Enter') {
            handleSearchKeyword(evt.target.value);
        }
    };

    return <header></header>;
}

export default Header;
