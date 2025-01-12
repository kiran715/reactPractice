import { useState } from "react";
// import Button from "react-bootstrap/Button";
import "../index.css";
const FruitCounter = () => {
    const [mango, setEatMango] = useState(0);
    const [banana, setEatBanana] = useState(0);

    const styles = {
        container: {
            backgroundColor: "#FFECB3",
            textAlign: "center",
            padding: "50px",
            borderRadius: "10px",
            fontFamily: "Arial, sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItmes: "center",
            height: "100vh",
        },
        box: {
            width: "720px",
            maxHeight: "560px",
            height: "100%",
            padding: "36px",
            borderRadius: "20px",
            backgroundColor: "white",
        },
        title: {
            fontSize: "2rem",
            margin: "30px",
        },
        number: {
            color: "#FF9800",
            fontWeight: "bold",
        },
        fruitContainer: {
            display: "flex",
            justifyContent: "center",
            gap: "50px",
        },
        fruitBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        image: {
            width: "300px",
            height: "300px",
            marginBottom: "15px",
        },
        button: {
            padding: "10px 20px",
            backgroundColor: "#03A9F4",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
        },
    };

    const eatMango = () => {
        return setEatMango(mango + 1);
    };

    const eatBanana = () => {
        return setEatBanana(banana + 1);
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h1 className="font-bold text-3xl">
                    Bob ate <span style={styles.number}>{mango}</span> mangoes{" "}
                    <span style={styles.number}>{banana}</span> bananas
                </h1>

                <div style={styles.fruitContainer}>
                    <div style={styles.fruitBox}>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/029/200/087/non_2x/mango-transparent-background-free-png.png"
                            alt="Mango"
                            style={styles.image}
                        />
                        <button onClick={eatMango} style={styles.button}>
                            Eat Mango
                        </button>
                    </div>

                    <div style={styles.fruitBox}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2vbcqbvOyjqvcfhJdzTFVqs0QaCigrfEag&s"
                            alt="Banana"
                            style={styles.image}
                        />
                        <button onClick={eatBanana} style={styles.button}>
                            Eat Banana
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FruitCounter;
