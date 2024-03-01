

type CommentsType = {
    id?: number,
    name?: string,
    email?: string,
    body?: string,
    // postId?: number
}

type CommentsPropsType ={
    comments: CommentsType[]
}



export const Comments: React.FC<CommentsPropsType> = ({comments}) => {
    // console.log(props.coments)
  return (
    <ul>
        {comments.map( comment => {
            if (comment.id === 132) {
                return <li key={comment.id}>{comment.name} ----- {comment.email}</li>  
            }else{
                <h3>Empty</h3>
            }
        })}
    </ul>
  )
}
