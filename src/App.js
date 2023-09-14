

import FriendsList from './components/FriendsList';
import Bill from './components/Bill';
import AddFriend from './components/AddFriend';
import Button from './components/Button';


export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList/>
        <AddFriend />
        <Button>Add Friend</Button>
      </div>
      <Bill/>
      
    </div>
  );
}


