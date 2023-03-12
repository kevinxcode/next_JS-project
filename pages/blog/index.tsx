import React from 'react'
import { useRouter } from 'next/router'

const index = () => {
const router = useRouter();
const {page, limit} = router.query;
  return (
    <div>blog {page} - {limit}</div>
  )
}

export default index