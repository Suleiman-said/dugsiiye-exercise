import PropTypes from 'prop-types'
const UserCard = ({name,emial})=>{
    return(
        <div>
            <h2>{name}</h2>
            <p>{emial}</p>
        </div>
    )
}
UserCard.PropTypes = {
    name: PropTypes.string.isRequired,
    emial: PropTypes.string.isRequired
}
export default UserCard