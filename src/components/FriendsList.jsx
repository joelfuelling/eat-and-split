import Friend from "./Friends";
// A negative value means that person owes the person with a positive value money.

export default function FriendsList({friends}) {

    

    return(
        <>
            {friends.map((friend) =>
                <ul key={friend.id}>
                    <Friend friend={friend}/>
                </ul>
            )}
            
        </>
    )
}