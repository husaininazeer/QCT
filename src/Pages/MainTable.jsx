import React from 'react'
import ResultsTable from '../components/Table'
import data from '../db.json'
import { Stack, Heading, Button, Center } from '@chakra-ui/react'

export default function MainTable() {
  const handleNewEntry = () => {
    console.log('new entry button pressed')
  }

  return (
    <>
      <Stack>
        <Heading align="center" color="#012169" fontSize="75px">
          QurCan Transcriber
        </Heading>
        <Button onClick={handleNewEntry} className="newEntry">
          Add new entry
        </Button>
      </Stack>
      <Center>
        <ResultsTable data={data}></ResultsTable>
      </Center>
    </>
  )
}
