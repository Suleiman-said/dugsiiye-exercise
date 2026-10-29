import UserList from "./UserList";
const App = ()=>{
  const users = [
    {id: 1, name: 'suleiman', email: 'salmaanm585@gmail.com'},
    {id: 2, name: 'sucaad', email: 'sucaad@gmail.com'},
    {id: 3, name: 'kowther', email: 'kowther@gmail.com'}
  ]
  return(
    <div>
      <UserList users={users} />
    </div>
  )
}
export default App