import React from 'react'
import { useRouter } from 'next/router'

const blogid = () => {
    const router = useRouter();
    const {blogid} = router.query;
  return (
    <div>blogid {blogid}</div>
  )
}

export default blogid