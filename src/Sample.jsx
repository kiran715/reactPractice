function Sample() {
    const obj = {
        name: "abcd",
        age: 20,
    };

    console.log(obj);
    const { name, age } = obj;
    console.log(name, age);

    const arr = [1, 2, 3];
    const newArr = [...arr, 3, 4, 5];
    function sample(...rest) {
        console.log(rest);
    }

    sample(1, 2, 3, 4, 5, 6);
    return <h1>This is sample </h1>;
}

export default Sample;
