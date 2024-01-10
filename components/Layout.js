import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";

const Layout = (props) => {
  const { title } = props;
  return (
    <>
      <Head>
        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            function ga(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
            
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
            
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            }
            
            ga(window, document, 'script', 'dataLayer', 'GTM-T5XMRJWP');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        {title && <title>{title}</title>}
        <link rel="icon" href="static/icons/id-badge-regular.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
