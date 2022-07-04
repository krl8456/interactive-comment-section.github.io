
import './App.css';
import Users from './data.json'
import Comment from './components/Comment';


function App() {
  const comments = Users.comments;
  const currentUser = Users.currentUser;
 
  return (
    <div className="App">
      {
        comments.map((c, index) => {
          return (
            <Comment key={index} comments={c} />
          )
        })
      }
      
    </div>
  );
}

export default App;
