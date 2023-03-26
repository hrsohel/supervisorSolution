import React from 'react';
import {useRouter} from 'next/router'
import { useEffect } from 'react';

const updateUser = ({data}) => {
    // const router = useRouter()
    // useEffect(() => {
    //     (async () => {
    //         const res = await fetch(`http://localhost:3000/api/edi-course/${router.query.id}`)
    //         const data = await res.json()
    //         console.log(data)
    //     })()
    // }, [])
    return (
        <>
          <h1>{data.length}</h1>  
        </>
    );
};

export default updateUser;

export async function getServerSideProps(context) {
    const {params} = context
    console.log(context)
   const res = await fetch(`https://supervisorsolutions.com/api/demo/${params.id}`)
   const data = await res.json()
   return {props: {data}}
}