import Head from "next/head";
export default function Seo() {
  return (
    <Head>
      <title>Arthur Ronconi - Front End Design/Development</title>
      <meta
        name="title"
        content="Arthur Ronconi - Front End Design/Development"
      />
      <meta
        name="description"
        content="I'm a Front End Designer/Developer and this is my porfolio page."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://artu.dev/" />
      <meta
        property="og:title"
        content="Arthur Ronconi - Front End Design/Development"
      />
      <meta
        property="og:description"
        content="I'm a Front End Designer/Developer and this is my porfolio page."
      />
      <meta property="og:image" content="https://artu.dev/og.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://artu.dev/" />
      <meta
        property="twitter:title"
        content="Arthur Ronconi - Front End Design/Development"
      />
      <meta
        property="twitter:description"
        content="I'm a Front End Designer/Developer and this is my porfolio page."
      />
      <meta property="twitter:image" content="https://artu.dev/og.png" />
    </Head>
  );
}
