import React from 'react'
import PropTypes  from 'prop-types'
const UserItem = ({user:{login, avatar_url, html_url}})=> {

        return (
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card text-center m-2">
                    <img src={avatar_url} alt="avatar" className="round-img" style={{width:'60px'}} />
                    <h3>{login}</h3>
                    <div>
                        <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                    </div>
                </div>
            </div>
        )
}
UserItem.propTypes = {
    user:PropTypes.object.isRequired
}
export default UserItem
