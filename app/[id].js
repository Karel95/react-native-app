/* eslint-disable prettier/prettier */
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const Detail = () => {
  const { id } = useLocalSearchParams
  return (
    <div>Detalles del objeto {id}</div>
  )
}

export default Detail