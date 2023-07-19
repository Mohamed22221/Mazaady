import { useGetAllCatsQuery } from '@/api/services/packagesApi'
import React from 'react'
/** @format */
const search = () => {
  const data = useGetAllCatsQuery()
  console.log(data)
  return (
    <div>search</div>
  )
}

export default search