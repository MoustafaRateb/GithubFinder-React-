import React from 'react'
import { Spinner } from '../layout/Spinner'
import UserItem from './UserItem'
import PropTypes  from 'prop-types'
const Users =({loading,users})=> {
    
    if(loading){
        return <Spinner />
    }else{
        return (
            <div className="row justify-content-md-center">
                {
                    users.map(user=>(
                    <UserItem key={user.id} user={user}/>
                    ))
                }
            </div>
        )
            }
}
Users.propTypes = {
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}
export default Users
