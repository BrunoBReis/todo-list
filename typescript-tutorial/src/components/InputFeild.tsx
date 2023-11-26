import React, { useRef } from 'react'
import "./styles.css"
// rafce helps to creat an simple struct

// Props has all todo types
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

// const InputFeild: React.FC<props> = ... works the same
// InputFeils has todo and setTodo 
const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    // this event (onSubmit) solves the blur when press enter
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
            }}>
            <input
                ref={inputRef}
                type='input'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a tesk'
                className='input__box'></input>
            <button className='input_submit' type='submit'>
                Go
            </button>
        </form>
    )
}

export default InputFeild
