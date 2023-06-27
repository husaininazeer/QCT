import React, { useState } from 'react'
import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function AddNewEntry() {
  const navigate = useNavigate()
  const [valuesToAdd, setValuesToAdd] = useState({
    mutationType: '',
    mutation: '',
    notes: '',
  })

  // handlers
  const handleBackPress = () => {
    navigate(-1)
  }

  const handleTextChange = ({ target: { value, name } }) => {
    const existingValues = { ...valuesToAdd, [name]: value }
    setValuesToAdd(existingValues)
  }

  const handleSubmit = () => {
    console.log(valuesToAdd)
  }

  return (
    <>
      <Heading align="center" color="#012169" fontSize="75px">
        QurCan Transcriber
      </Heading>
      <Button onClick={handleBackPress}> Back to main table </Button>
      <Stack direction="column" maxWidth="80%">
        <FormControl variant="floating" id="mutation" isRequired>
          <FormLabel>Mutation </FormLabel>
          <Input
            name="mutation"
            placeholder="Enter mutation"
            value={valuesToAdd.mutation}
            onChange={(e) => handleTextChange(e)}
          />
          <FormHelperText>Word that is read differently</FormHelperText>
        </FormControl>
        <Divider />

        <FormControl
          variant="floating"
          id="mutationType"
          isRequired
          // FIXME
          // invalid={!!valuesToAdd.mutationType.length ? true : undefined}
        >
          <FormLabel>Mutation Type</FormLabel>
          <Input
            name="mutationType"
            placeholder="Enter mutation type"
            value={valuesToAdd.mutationType}
            onChange={(e) => handleTextChange(e)}
          />
          <FormHelperText>Omission, إمالة, Pause</FormHelperText>
          <FormErrorMessage>Your First name is invalid</FormErrorMessage>
        </FormControl>

        <FormControl variant="floating" id="notes">
          <FormLabel>Notes</FormLabel>
          <Textarea
            value={valuesToAdd.notes}
            onChange={handleTextChange}
            name="notes"
            placeholder="Enter notes here"
          ></Textarea>
        </FormControl>
        <Button onClick={handleSubmit} width="inherit">
          Add new entry{' '}
        </Button>
      </Stack>
    </>
  )
}

export default AddNewEntry
