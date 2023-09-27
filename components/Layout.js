import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '../components/Nav'

export default function Layout({ children }) {
    const { data: session } = useSession()
    if (!session) {
        return <>
            <div className=" w-screen h-screen bg-blue-900 flex items-center">
                <div className="w-full text-center" >
                    <Button onClick={() => signIn('google')} variant='ghost' colorScheme='blue' bg='whiteAlpha.800'>
                        Login with google
                    </Button>
                </div>
            </div>
        </>
    }

    // if (session) {
    //   return <>
    //     Signed in as {session.user.email} <br />
    //     <button onClick={() => signOut()}>Sign out</button>
    //   </>
    // }
    return (
        <>
            <Head>
                <title> Black List | Home</title>
                <meta name='keywords' content='black' />
            </Head>
            <div className=' bg-teal-700 min-h-screen flex'>
                <Nav />
                <div className='bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4'>
                    {children}
                    {/* {session.user.email} */}
                </div>
            </div>
        </>
    )
}






















// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
