import Button from "./Button"
import { useState } from "react";

export default function Bill({selectedFriend, onSplitBill}) {
    const [bill, setBill] = useState('')
    const [userExpense, setUserExpense] = useState('')
    const [whoIsPaying, setWhoIsPaying] = useState('')

    const paidByFriend = bill ? bill - userExpense : ''


    function handleSubmit(e) {
        e.preventDefault()
        // If the bill or userExepense inpust are empty, return.
        // If current user is 'user', use 'paidByFriend' for bill function, othwerwise subract the user expense.
        if (!bill || !userExpense) return 
        onSplitBill(whoIsPaying === 'user' 
        ? paidByFriend
        : -userExpense
        )
    }
    return (
        <>
        
        <form className="form-split-bill" onSubmit={handleSubmit}>
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
            <Button>Split bill</Button>
        </form>
        
        </>
    )
}