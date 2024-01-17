import {Component, useState} from 'react'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  InputContainer,
  Input,
  InputTextArea,
  Button,
  ItemListContainer,
  NoNotesContainer,
  Image,
  NotesHeading,
  Paragraph,
} from './styledComponents'

class Notes extends Component {
  const [titleInput, setTitleInput] = useState('')
  const [notesInput, setNotesInput] = useState('')
  const [result, setResult] = useState(false)

  const onChangeTitleInput = event => {
    setTitleInput(event.target.value)
  }

  const onChangeNotesInput = event => {
    setNotesInput(event.target.value)
  }

  const onClickSubmit = event => {
    event.preventDefault()
    setResult(true)
  }

  render() {
    const {titleInput, notesInput, result} = this.state
    return (
      <MainContainer>
        <Heading>Notes</Heading>
        <InputContainer>
          <Input
            onChange={onChangeTitleInput}
            value={titleInput}
            placeholder="Title"
          />
          <InputTextArea
            onChange={onChangeNotesInput}
            value={notesInput}
            placeholder="Take a note..."
          />
          <Button type="submit" onClick={onClickSubmit}>
            Add
          </Button>
        </InputContainer>
        {result === true ? (
          <ItemListContainer>
            <NoteItem titleInput={titleInput} notesInput={notesInput} />
          </ItemListContainer>
        ) : (
          <NoNotesContainer>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NotesHeading>No Notes Yet</NotesHeading>
            <Paragraph>Notes you add will appear here</Paragraph>
          </NoNotesContainer>
        )}
      </MainContainer>
    )
  }
}

export default Notes
