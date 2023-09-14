

import FriendsList from './components/FriendsList';
import Bill from './components/Bill';
import AddFriend from './components/AddFriend';


export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList/>
      </div>
      <Bill/>
      <AddFriend />
    </div>
  );
}


