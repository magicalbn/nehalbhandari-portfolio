import React from 'react';
import Head from 'next/head'

import Navbar from './Navbar'


const Layout = (props) => {
    const { title } = props;
    return (
        <>
            <Head>
                {title && <title>{title}</title>}

                <link rel="icon" href="static/icons/id-badge-regular.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

                    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap" rel="stylesheet" />
            </Head>
                <Navbar />
                {props.children}


        </>
    )
}

export default Layout;