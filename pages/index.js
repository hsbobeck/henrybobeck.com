import WorkPage from './work.js'
import HomePage from './home.js'
import HomeLayout from '../components/homelayout'
import React, { useState, useEffect } from 'react'


export async function getStaticProps() {
  return { props: { isDark: true } };
}

export default function Home() {

  return (
    <>
      {HomePage()}
    </>
  )
}


