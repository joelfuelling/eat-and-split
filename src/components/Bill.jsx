import Button from "./Button"
import { useState } from "react";

export default function Bill({selectedFriend, friends}) {
    const [bill, setBill] = useState('')
    const [userExpense, setUserExpense] = useState('')
    const [whoIsPaying, setWhoIsPaying] = useState('')

    function splitBill() {

    }

    if (!selectedFriend) {
        return 'No selected Friend'; // or return some kind of placeholder or error message
    }
    return (
        <>
        
        <form className="form-split-bill">
            <h2>Split a bill with {`${selectedFriend?.name}`}</h2>

            <p>Bill value</p>
            <input 
                type="Number" 
                value={bill} 
                onChange={e => setBill(Number(e.target.value))}
            />

            <p>Your expense</p>
            <input 
                type="Number" 
                value={userExpense} 
                onChange={e => setUserExpense(Number(e.target.value) > bill ? userExpense : Number(e.target.value))}
            />

            <p>{`${selectedFriend?.name}s`} expense:</p>
            <input 
                type="text" 
                disabled 
                value={`${(bill && userExpense) && bill - userExpense}`}
            />

            <p>Who is paying the bill?</p>
                <select
                    value={whoIsPaying}
                    onChange={e => setWhoIsPaying(e.target.value)}>
                    <option value='user'>you</option>
                    <option value={`${selectedFriend.name}`}>{selectedFriend.name}</option>
                </select>
            <Button onSubmit={splitBill}>Split bill</Button>
        </form>
        
        </>
    )
}