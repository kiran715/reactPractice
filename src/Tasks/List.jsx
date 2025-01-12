const List = () => {
    const Mobiles = ["Redmi", "POCO", "Iphone", "Vivo", "Realme", "Samsung"];

    return (
        <div>
            <p>This is Smartphones list</p>
            <ul>
                {Mobiles.map((mobile) => {
                    return <li>{mobile}</li>;
                })}
            </ul>
        </div>
    );
};

export default List;
