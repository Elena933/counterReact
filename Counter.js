import {useState} from "react";
const initialCounters = [
    {
        id: 123,
        value: 10,
        weight: 22
    }, {
        id: 153,
        value: 5,
        weight: 23
    }, {
        id: 183,
        value: 1,
        weight: 24
    }

]

function Counter() {
    const [counts, setCounts] = useState(initialCounters)
    const minus = (id) => {
        const updatedCounts = counts.map(el => el.id === id
            ? {...el, value: el.value - 1}
            : el
        );
        setCounts(updatedCounts)
    }
    const plus = (id) => {
        const updatedCounts = counts.map(el => el.id === id
            ? {...el, value: el.value + 1}
            : el
        );
        setCounts(updatedCounts)
    }
    const addCounter = () => {
        const newCount = {
            id: Math.random(),
            value:0
        };
        setCounts([...counts,newCount])
    }
    const deleteCounter = (id)=> {
        const deleteCount =
            counts.filter(el => el.id !== id)

        setCounts(deleteCount)
    }
    const goUp = (id) => {
        const up = counts.filter(el => el.id === id)[0].weight

    }
    const goDown = (id) => {
        const up = counts.filter(el => el.id === id)[0].weight

    }


    return (
        <div>
            <ul>
                {counts.map(el => (
                    <li key={el.id}>
                        <button onClick={() => minus(el.id)}>Minus</button>
                        {el.value}
                        <button onClick={() => plus(el.id)}>Plus</button>
                        <button onClick={() => deleteCounter(el.id)}>Delete</button>
                        <button onClick={()=> goUp(counts.id)}  >↑</button>
                        <button >↓</button>
                    </li>
                ))}
            </ul>
            <hr/>
            <button onClick={addCounter}>Add counter</button>
        </div>
    )
}

export default Counter
