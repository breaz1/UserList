import React from 'react';
import Headder from './Comp/Headder';
import Users from './Comp/Users';
import AddUser from './Comp/AddUser';
import axios from 'axios';


const baseUrl = 'https://reqres.in/api/users?page=1'

class App extends React.Component
{
  constructor(props)
  {
    super(props)

    axios.get(baseUrl).then((response)=>{
      this.setState({users:(response.data.data)})
    })

    this.state = {
        users:[
        ]
    }
    this.addUser  = this.addUser.bind(this)
    this.deleteUser  = this.deleteUser.bind(this)
    this.editUser  = this.editUser.bind(this)
  }
  render() { 
    return (
    <div>
      <Headder title="Список пользователей" />
      <main className='users'>
        <Users users={this.state.users} delUs={this.deleteUser} onEdit={this.editUser}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>
    </div>)
  }

  addUser(user)
  {
    const id = this.state.users.length+1
    this.setState({users:[...this.state.users, {id,...user}]})
    
  }

  deleteUser(id)
  {
    this.setState({
      users: this.state.users.filter((el)=>el.id!==id)
    })
  }

  editUser(user)
  {
    let usrs = this.state.users.find(usr => usr.id === user.id)
    this.setState({user:[
      usrs.id = user.id,
      usrs.first_name = user.first_name,
      usrs.last_name = user.last_name,
      usrs.email = user.email
      ]})
    
    console.log(user)
  }
}

export default App