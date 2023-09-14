import Button from "./Button";

export default function AddFriend() {

    function handleFriendAdd(e) {
        const friend = e.target[0].value;
        console.log(friend)
    }
    return (
        <>
        <div>
            <form className="form-add-friend">
                <p>Friend name </p>
                <input type="text"/>
                <p> Image URL </p>
                <input type="URL"/>
                <Button className="button" onSubmit={handleFriendAdd}> Add</Button>
            </form> 
        </div>
        </>
    )
}