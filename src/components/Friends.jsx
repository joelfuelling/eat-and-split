import Button from "./Button"
export default function Friend({friend, selectedFriend, onSelection}) {
    // Sometimes selectedFriend is 'null', so we have to add the optional chainging to cur otherwise we get "cannot read .id" errors.
    const isSelected = selectedFriend?.id === friend.id
    
    return (
        <>
        <li >    
            <img src={`${friend.image}`} alt={friend.name} />
            <h3>{friend.name}</h3>
            {/* Triple Short Circuit! Only one will apply */}
            {friend.balance < 0 && 
            <p className="red">
                You owe {`${friend.name}`} ${`${Math.abs(friend.balance)}`}
            </p>}
            {friend.balance > 0 && 
            <p className="green">
                {`${friend.name}`} owes you  ${`${Math.abs(friend.balance)}`}
            </p>}
            {friend.balance === 0 && 
            <p >
                You and {`${friend.name}`} are even
            </p>}
            <Button onClick={() => onSelection(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
        </>
    )
            

}