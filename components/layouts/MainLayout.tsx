import Head from "next/head"
import { Navbar } from "../ui";


interface MainLayoutProps{
  children: JSX.Element | JSX.Element[],
  title?: string;
}


export const MainLayout = ({ children,title }: MainLayoutProps) => {

  const origin = (typeof window !== 'undefined') ? window.location.origin : '';

  return (
    <>
      <Head>
        <title>{ title ?? 'Pokemon app' }</title>
        <meta name="author" content="Augusto Rengifo @aurendev" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`pokemon, ${title}, informacion`} />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '2rem 1.5rem ',
      }}>
        {children}
      </main>
    </>
  )
}
