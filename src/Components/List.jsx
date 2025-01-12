const fruits = ["Apple", "Orange", "Mango", "Grapes"];

function Fruits() {
    return (
        <div>
            <h1>Fruits</h1>
            <ul>
                {fruits.map((items) => (
                    <li key={items}>{items}</li>
                ))}
            </ul>
        </div>
    );
}

export default Fruits;
