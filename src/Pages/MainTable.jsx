import React from 'react'
import ResultsTable from '../components/Table'
import data from '../db.json'
import { Heading, Button } from '@chakra-ui/react'

export default function MainTable() {
  return (
    <>
      <Heading colorScheme="twitter">QCT</Heading>
      <Button>Add new entry</Button>
      <ResultsTable data={data}></ResultsTable>
    </>
  )
}
