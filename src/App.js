
import { useEffect, useState} from 'react';
import './App.css';
import '../src/styles/styles.css'
function App() {

  const [initialRepos, setInitialRepos] = useState([])
  const [Repos, setRepos] = useState([]);

  useEffect(()=>{
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/eibrunodev/repos')
        const data = await response.json()
        setRepos(data)
        setInitialRepos(data)
        console.log(data)
      }catch(erro){
        console.log(erro)
      }
    }
     fetchRepositories() 
  },[])

  const handle = ({target})=>{
    if(!target.value){
      setRepos(initialRepos)
      return
    }

    const filterRepos = Repos.filter(({name}) => name.includes(target.value))

    setRepos(filterRepos)
  }
  return (
    <div className="App">
       <div className="Container-input">
         <input type='text' onChange={handle} />
       </div>

        <div className="Container-list">
            <ul className='List-containers'>
              {Repos.map((repo)=>(
                <li key={repo.id} > {repo.name} </li>
              ))}
            </ul>
        </div>

    
    </div>
  );
}

export default App;
