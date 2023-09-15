import Button from "./Button"

export default function Bill({selectedFriend}) {

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
            <input type="Number"/>

            <p>Your expense</p>
            <input type="Number"/>

            <div>{`${selectedFriend?.name}s`} expense:</div>
            <input type="text" disabled/>

            <p>Who is paying the bill?</p>
                <select>
                    <option value='user'>you</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
            <Button onSubmit={splitBill}>Split bill</Button>
        </form>
        
        </>
    )
}