import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Courses from '../components/Courses'
import Features from '../components/Features'
import Footer from '../components/Footer'
import NavbarForAll from '../components/NavbarForAll'
import Pagination from '../components/Pagination'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [loading, setLoading] = React.useState(false)
  const [count, setCount] = React.useState(1)
  const [length, setLength] = React.useState(0)
    const decrease = () => {
        if(count < 2) setCount(1)
        else setCount(prev => prev - 1)
    }
    const increase = () => {
        if(count < 1) setCount(1)
        else setCount(prev => prev + 1)
    }
  return (
    <div className=''>
      <NavbarForAll />
      <Banner />
      <div className='bg-gradient-to-b from-[#faf8ff] to-[#c0ddff] '>
        <Features />
        <Courses 
          count = {count} 
          setLoading = {setLoading} 
          setLength = {setLength}
        />
        <Pagination 
          count = {count}
          increase = {increase}
          decrease = {decrease}
          loading = {loading}
          length = {length}
         />
      </div>
      <Footer />
    </div>
  )
}
