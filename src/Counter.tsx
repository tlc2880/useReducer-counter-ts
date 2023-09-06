import { ReactNode, useReducer, useState, ChangeEvent } from 'react'

const initState = { numArray: [1, 2], text: '' }

const enum REDUCER_ACTION_TYPE {
    // INCREMENT,
    // DECREMENT,
    // RESET,
    // ADD_INC,
    // ADD_ARRAY,
    MULT_ARRAY,
//    NEW_INPUT,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload: number,
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        // case REDUCER_ACTION_TYPE.INCREMENT:
        //     return { ...state, count: state.count + action.payload }
        // case REDUCER_ACTION_TYPE.DECREMENT:
        //     return { ...state, count: state.count - action.payload }
        // case REDUCER_ACTION_TYPE.RESET:
        //     return { ...state, count: action.payload }       
        // case REDUCER_ACTION_TYPE.ADD_INC:
        //     return { ...state, count: state.count + action.payload } 

        case REDUCER_ACTION_TYPE.MULT_ARRAY:
            let numArrTemp = [...state.numArray];
            numArrTemp.forEach((item, index, arr) => {
              arr[index] = item * action.payload;
            });
            return {
              ...state,
              numArray: numArrTemp
            };
        // case REDUCER_ACTION_TYPE.NEW_INPUT:
        //     return { ...state, text: action.payload ?? '' }
        default:
            throw new Error()
    }
}

type ChildrenType = {
    children: (numArray: number[]) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const [incAmount, setIncAmount] = useState("2");
    const [arrMultAmt, setArrMultAmt] = useState(2);

    // const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT, payload: 1})
    // const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT, payload: 1 })
    // const reset = () => dispatch({ type: REDUCER_ACTION_TYPE.RESET, payload: 0 })
    // const add_inc = () => dispatch({ 
    //     type: REDUCER_ACTION_TYPE.ADD_INC,
    //     payload: Number(incAmount) 
    // })
    const mult_array = () => dispatch({ 
        type: REDUCER_ACTION_TYPE.MULT_ARRAY,
        payload: Number(arrMultAmt) 
    })

    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        setArrMultAmt(Number(e.target.value));
    }

    return (
        <>
            <h1>{children(state.numArray)}</h1>
            <div>
                {/* <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
                <button onClick={add_inc}>Add Inc.</button> */}
                <button onClick={ mult_array }>Mult Array</button>
            </div>
            <input 
                type="text"
                value={arrMultAmt}
                onChange={handleTextInput} 
            />
           {/* <h2>{state.text}</h2> */}
        </>
    )
}

export default Counter