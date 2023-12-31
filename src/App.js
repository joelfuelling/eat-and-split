import { useState } from 'react';

import FriendsList from './components/FriendsList';
import Bill from './components/Bill';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // [friends, setFriends] is lifting state.
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)
  
  
  //! Direct State Manipulation - Be Weary!
  /*
  In this version, showAddFriend is directly read and its negated value is set back using setShowAddFriend. This method could potentially lead to inconsistent state updates if showAddFriend is updated elsewhere in close succession, because React state updates can be asynchronous, meaning the value of showAddFriend may not have been updated at the time you're accessing it to determine the new state.
  
  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }
  */


  //% Function State Update:
  /*
  In this version, setShowAddFriend is being used with a function as its argument. The function receives the current state as its parameter and returns the new state. This ensures that the update will be based on the most recent value of the state, even if other state updates are happening concurrently. This approach is safer and less likely to result in bugs when dealing with rapid or concurrent state updates.
  */

   function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  /*
  //* In general, it's a good practice to use the functional form of the state setter function when the new state is derived from the old state to avoid any inconsistencies due to the asynchronous nature of state updates in React.
  */

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend])
    handleShowAddFriend()
  }
  
  function handleSelection(friend) {
    // Sometimes cur is 'null', so we have to add the optional chainging to cur otherwise we get "cannot read .id" errors.
    setSelectedFriend((cur) =>
    cur?.id === friend.id 
    ? null 
    : friend
    )
    setShowAddFriend(false)
  }

  function handleSplitBill(value) {
    console.log(value)
    setFriends(friends => 
      friends.map(
        friend =>
          friend.id === selectedFriend.id 
            // Add the current value plus what was received from the bill component.
            ? {...friend,balance: friend.balance + value}  
            : friend
      ))
      setSelectedFriend(null)

  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList 
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        /> 
        {
          showAddFriend && 
          <AddFriendForm onAddFriend={handleAddFriend}/>
        }
        <Button 
          onClick={handleShowAddFriend}>
          {showAddFriend ? 
          'Close' : 'Add Friend'}
        </Button>
      </div>
        {selectedFriend && 
        <Bill 
          selectedFriend={selectedFriend}
          friends={friends}
          onSplitBill={handleSplitBill}
        />}
    </div>
  );
}


