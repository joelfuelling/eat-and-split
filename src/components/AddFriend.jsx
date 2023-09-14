export default function AddFriend() {

    function handleFriendAdd(e) {
        const friend = e.target[0].value;
        console.log(friend)
    }
    return (
        <>
        <div>
            <form className="form-add-friend">
                <h4> Friend name
                <input type="text"/>
                </h4> 
                <h4> Image URL
                <input type="URL"/>
                </h4>
                <button className="button">Add</button>
            </form>
            <button className="button" onSubmit={handleFriendAdd}> Close</button>
        </div>
        </>
    )
}