// Write your code here
import {ListItem, Title, Notes} from './styledComponents'

const NoteItem = props => {
  const {titleInput, notesInput} = props

  return (
    <ListItem>
      <Title>{titleInput}</Title>
      <Notes>{notesInput}</Notes>
    </ListItem>
  )
}

export default NoteItem
