import React from 'react'
import { Spinner } from '../layout/Spinner'
import UserItem from './UserItem'

const Users =({loading,users})=> {
    
    if(loading){
        return <Spinner />
    }else{
        return (
            <div className="row">
                {
                    users.map(user=>(
                    <UserItem key={user.id} user={user}/>
                    ))
                }
            </div>
        )
            }
}

export default Users
