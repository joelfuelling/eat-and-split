export default function Bill() {
    return (
        <>
        
        <form className="form-split-bill">
            <h2>Split a bill with "Name of selected friend goes here"</h2>
            <p>Bill value</p>
            <input type="text"/>
            <p>Your expense</p>
            <input type="text"/>
            <div>"Selected Persons name" expense:</div>
            <input></input>
            <p>Who is paying the bill?</p>
                <select>
                    {/* Dropdwon component to map each person to drop down */}
                </select>
            <button>Split bill</button>
        </form>
        
        </>
    )
}