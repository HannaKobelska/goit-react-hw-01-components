import './App.css';

import TaskTitle from './TaskTitle/TaskTitle';

import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

import FriendList from './FriendListCont/FriendList';
import friends from './FriendListCont/friends.json';

import TransactionHistory from './Transaction/TransactionHistory';
import items from './Transaction/transactions.json';

function App() {
  return (
    <div className="App">
      
      <TaskTitle tasktitle="1 - Профиль социальной сети" />
      
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      
      <TaskTitle tasktitle="2 - Секция статистики" />
     
      <Statistics title="Upload stats" stats={data} />
    
      <TaskTitle tasktitle="3 - Список друзей" />
      
      <FriendList friends={friends} />

      <TaskTitle tasktitle="4 - История транзакций" />

      <TransactionHistory items={items} />
     
    </div>

  );
}

export default App;

