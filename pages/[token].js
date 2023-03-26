import React from 'react';
import axios from 'axios';
import HeadTag from '../components/HeadTag'
import { useEffect } from 'react';

const token = ({token}) => {
    useEffect(() => {
        (async () => {
            const {data} = await axios.get(`/api/signup/${token}`)
            alert(data.message)
        })()
    }, [])
    return (
        <>
        <HeadTag title="Account Confirmation" />
        <div className='h-screen w-screen flex items-center justify-center text-xl text-green-600'>
            <div>
                <img className='block mx-auto' src="/images/accept.png" alt="" />
                <h1 className='mt-4 font-semibold'>All done! Your account has been created.</h1>
            </div>
        </div>
        </>
    );
};

export default token;

export async function getServerSideProps({params}) {
    return {
        props: {token: params.token}
    }
}