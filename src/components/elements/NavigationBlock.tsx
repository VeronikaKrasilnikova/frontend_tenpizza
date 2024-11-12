
const NavigatonBlock = ({ className = '' }) => {
    return (
        <section className="nav_line">
            <section className="nav_container">
                <button className="return_button"> <img src='/src/image/arrow_back.svg' alt="Back" />Назад</button>
                <button className="page_button">1</button>
                <button className="page_button">2</button>
                <button className="page_button">3</button>
                <button className="next_button">Вперед <img src='/src/image/arrow_next.svg' alt="Next" /></button>
            </section>
            <div className="page_count">Всего страниц:</div>
            <input type="text" placeholder="Поиск" className="search_container" />
        </section>
    );
};

export default NavigatonBlock;