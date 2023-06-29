import React, { useState, useRef } from 'react'
import {
  AbsoluteCenter,
  Button,
  Box,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Select,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import paths from '../paths'
import InputField from '../components/Input'
import styles from './AddNewEntry.scss'

function AddNewEntry() {
  const navigate = useNavigate()

  const stateRef = useRef()

  // handlers
  const handleBackPress = () => {
    navigate(paths.mainTable)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(stateRef)
  }

  // making form from scratch because why not!

  const inputProps = [
    {
      name: 'surah',
      type: 'number',
      placeholder: 'Surah number',
      label: 'surah',
      min: 1,
      max: 114,
    },
    {
      name: 'ayah',
      type: 'number',
      placeholder: 'Ayah number',
      label: 'ayah',
      min: 1,
    },
    {
      name: 'mutationType',
      type: 'select',
      placeholder: 'Enter mutation type here',
      label: 'Mutation Type',
    },
    {
      name: 'mutation',
      type: 'select',
      placeholder: 'Mutation',
      label: 'mutation',
    },
    {
      name: 'notes',
      type: 'text',
      placeholder: 'Notes',
      label: 'notes',
    },
  ]

  return (
    <>
      <Heading align="center" color="#012169" fontSize="75px">
        QurCan Transcriber
      </Heading>
      <Button onClick={handleBackPress}> Back to main table </Button>
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          {inputProps?.map((inputProp, index) => (
            <InputField
              key={index}
              refer={stateRef}
              props={inputProp}
            ></InputField>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddNewEntry
