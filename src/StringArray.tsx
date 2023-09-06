import { ReactNode, useReducer, useState, ChangeEvent } from 'react'

const initState = {
    strArray: ['One', 'Two']
}

const enum REDUCER_ACTION_TYPE {
    PUSH_ARRAY,
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload: string,
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.PUSH_ARRAY:
            return {
                ...state,
                strArray: [...state.strArray, action.payload]
            };

        default:
            throw new Error()
    }
}

type ChildrenType = {
    children: (strArray: string[]) => ReactNode
}

const StringArray = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const [arrPushStr, setArrPushStr] = useState('');

    const push_array = () => dispatch({
        type: REDUCER_ACTION_TYPE.PUSH_ARRAY,
        payload: arrPushStr
    });

    const handlePushInput = (e: ChangeEvent<HTMLInputElement>) => {
        setArrPushStr(e.target.value);
    }

    return (
        <>
            <h2>{children(state.strArray)}</h2>
            <div>
                <input 
                    type="text"
                    value={arrPushStr}
                    onChange={handlePushInput} 
                />
                <button onClick={ push_array }>Push Str Array</button>
            </div>
        </>
    )
}

export default StringArray;