import { ReactNode, useReducer, useState, ChangeEvent } from 'react'

const initState = {
    numArray: [1, 2]
}

const enum REDUCER_ACTION_TYPE {
    PUSH_ARRAY,
    MULT_ARRAY,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload: number,
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.MULT_ARRAY:
            let numArrTemp = [...state.numArray];
            numArrTemp.forEach((item, index, arr) => {
              arr[index] = item * action.payload;
            });
            return {
              ...state,
              numArray: numArrTemp
            };

        case REDUCER_ACTION_TYPE.PUSH_ARRAY:
            return {
                ...state,
                numArray: [...state.numArray, action.payload]
            };

        default:
            throw new Error()
    }
}

type ChildrenType = {
    children: (numArray: number[]) => ReactNode
}

const NumberArray = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const [arrMultAmt, setArrMultAmt] = useState(2);
    const [arrPushNum, setArrPushNum] = useState(2);

    const mult_array = () => dispatch({ 
        type: REDUCER_ACTION_TYPE.MULT_ARRAY,
        payload: Number(arrMultAmt) 
    });

    const push_array = () => dispatch({
        type: REDUCER_ACTION_TYPE.PUSH_ARRAY,
        payload: Number(arrPushNum)
    });

    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        setArrMultAmt(Number(e.target.value));
    }

    const handlePushInput = (e: ChangeEvent<HTMLInputElement>) => {
        setArrPushNum(Number(e.target.value));
    }

    return (
        <>
            <h2>{children(state.numArray)}</h2>
            <div>
                <input 
                    type="text"
                    value={arrMultAmt}
                    onChange={handleTextInput} 
                />
                <button onClick={ mult_array }>Mult Num Array</button>
                <br/>
                <input 
                    type="text"
                    value={arrPushNum}
                    onChange={handlePushInput} 
                />
                <button onClick={ push_array }>Push Num Array</button>
            </div>
        </>
    )
}

export default NumberArray;