import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard.css"
        />
        <script
					type="text/javascript"
					src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=oan7725a3j"
				></script>
      </Head>
      <body className="body">
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;