// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
import TaskTitle from './TaskTitle/TaskTitle';
import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

function App() {
  return (
    <div>
    
      <TaskTitle tasktitle="1 - Профиль социальной сети" />
      
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      
       <TaskTitle tasktitle="2 - Секция статистики" />
     
      <Statistics stats={data} />
    

     
    </div>

     
  );
}

export default App;

