export default function Likes({likes}){
    console.log(likes)
    return(
        <ul>
            {likes.map(like => <li key={like.id}>{like.like}</li>)}
        </ul>
    )
}