import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

const DEFAULT_HEADERS = ['surah', 'ayah', 'mutation', 'wordToMutate', 'notes']

export default function ResultsTable({ data }) {
  const headers = Object.keys(data['1']).length
    ? Object.keys(data['1'])
    : DEFAULT_HEADERS

  const entriesOnTable = Object.values(data)

  return (
    <>
      <TableContainer aria-label="example table">
        <Table variant="simple" colorScheme="telegram" size="lg">
          <TableCaption>Example QurCan entry from sample data </TableCaption>
          <Thead>
            <Tr>
              {headers.map((header) => (
                <Th key={header}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {entriesOnTable.map((entry, index) => (
              <Tr key={index}>
                <Td>{entry.surah}</Td>
                <Td>{entry.ayah}</Td>
                <Td>{entry.mutationType}</Td>
                <Td>{entry.mutation}</Td>
                <Td>{entry.notes}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

ResultsTable.propTypes = {
  data: PropTypes.object,
}
