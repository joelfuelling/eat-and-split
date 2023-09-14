import Button from "./Button"

export default function Bill() {

    function splitBill() {

    }
    
    return (
        <>
        
        <form className="form-split-bill">
            <h2>Split a bill with "Name of selected friend goes here"</h2>
            <p>Bill value</p>
            <input type="Number"/>

            <p>Your expense</p>
            <input type="Number"/>

            <div>"Selected Persons name" expense:</div>
            <input type="text" disabled/>

            <p>Who is paying the bill?</p>
                <select>
                    <option value='user'>you</option>
                    <option value="friend">X</option>
                </select>
            <Button onSubmit={splitBill}>Split bill</Button>
        </form>
        
        </>
    )
}