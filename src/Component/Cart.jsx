import { useEffect, useState } from "react";

const Person = (props) => {
    return (
        <>
            <h1>Name:{props.name}</h1>
            <h1>Father:{props.father}</h1>
            <h1>age:{props.age}</h1>
        </>
    )
}
const Cart = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        // setCounter(100)
        // alert('You have Changed the Counter ' + counter)
        console.log('You have Changed the Counter ', { counter });
    }, [counter])

    const firstName = "Shoaib"
    const lastName = "Qureshi"
    const isNameShowing = true
    // const  
    return (
        <div className="container m-auto">
            <h1 className="text-center font-bold">{firstName}</h1>
            <h1 className="text-center font-bold">{lastName}</h1>
            {isNameShowing ? <> <h1>Hello name is {firstName} {lastName}</h1><br></br><h3>Hello </h3></> : <h1>No name</h1>}
            <Person name={"talha"} father={"Asif"} age={"21"} />
            <Person name={"Ali"} father={"Shahid"} age={"75"} />
            <button onClick={() => setCounter((preSate) => (preSate + 1))}> +</button >
            <h1>Count={counter}</h1>
            <button onClick={() => setCounter((preSate) => (preSate - 1))}> -</button ><br></br>
            <button onClick={() => setCounter((preSate) => (preSate == 0))}> Reset</button >
        </div >
    );
};

export default Cart;