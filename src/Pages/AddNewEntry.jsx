import React from 'react'
import { Heading, Stack, Center, Button, Select, Input } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function AddNewEntry() {
  const navigate = useNavigate()

  const handleBackPress = () => {
    navigate(-1)
  }

  return (
    <>
      <Heading align="center" color="#012169" fontSize="75px">
        QurCan Transcriber
      </Heading>
      <Button onClick={handleBackPress}> Back to main table </Button>
      <Stack direction="column" shouldWrapChildren>
        <Center>
          <Input placeholder="Mutation Type"></Input>
          <Input placeholder="notes"></Input>
        </Center>
        <Button>Add new entry</Button>
      </Stack>
    </>
  )
}

export default AddNewEntry
