import React from 'react'
// import { Article, Brand, Cta, Feature, Navbar } from './components/index'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { Cta, Brand, Navbar } from './components'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient_bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />


        </div>

    )
}

export default App