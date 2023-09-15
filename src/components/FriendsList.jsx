import Friend from "./Friends";

export default function FriendsList({friends, onSelection, selectedFriend}) {

    // selectedFriend is being passed through FriendsList to Friends, or, we are 'Prop Drilling' 

    return(
        <>
        <ul>
            {friends.map((friend) =>  
                    <Friend 
                    friend={friend} 
                    key={friend.id}
                    selectedFriend={selectedFriend}
                    onSelection={onSelection} 
                    />
            )}
        </ul>
            
        </>
    )
}