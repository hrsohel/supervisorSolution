import React from 'react';
import {useRouter} from 'next/router'
import VideoPlayer from '../../components/VideoPlayer';

const videPlayer = () => {
    const router = useRouter()
    const {id} = router.query
    console.log(router)
    return (
        <div>
            <VideoPlayer id={id} />
        </div>
    );
};
export async function getServerSideProps(context) {
    return {
        props: {
            query: context.query
        }
    }
}

export default videPlayer;