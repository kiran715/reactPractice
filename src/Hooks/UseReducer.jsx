import React, { useReducer } from "react";
const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

function reducerFn(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducerFn, { count: 1 });

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    };

    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    };

    return (
        <div className="flex items-center gap-6">
            <button onClick={decrement}>-</button>
            <p>{state.count}</p>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default UseReducer;

const UseReducerWithArray = () => {
    const [state, dispatch] = useReducer(reducerFn, []); // Initial state is an empty array

    const addItem = () => {
        const newItem = `Item ${state.length + 1}`;
        dispatch({ type: ACTIONS.ADD_ITEM, payload: newItem });
    };

    const removeItem = (index) => {
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: index });
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {state.map((item, index) => (
                    <li key={index}>
                        {item}{" "}
                        <button onClick={() => removeItem(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { UseReducerWithArray };
