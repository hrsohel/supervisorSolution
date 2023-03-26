import React from 'react';
import HeadTag from '../components/HeadTag'
import SendToken from '../components/SendToken';
import NavbarForAll from '../components/NavbarForAll'

const forgotPassword = () => {
    return (
        <>
           <HeadTag title="Password Recovery" /> 
           <NavbarForAll />
           <SendToken />
        </>
    );
};

export default forgotPassword;