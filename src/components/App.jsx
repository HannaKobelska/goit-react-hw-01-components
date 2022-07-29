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
import Profile from './Profile';
import user from './user.json';

import Statistics from './Statistics';
import data from './data.json';

export default function App() {
  return (
    <div>
     
        <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      
     
<Statistics stats={data} />
    

     
    </div>

     
  );
}


