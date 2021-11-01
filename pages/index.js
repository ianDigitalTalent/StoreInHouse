import Head from 'next/head'
import Image from 'next/image';
import Header from "../components/Header"
import  Slider1  from "../components/Slider1"
import  Slider2  from "../components/Slider2"
import  Slider3  from "../components/Slider3"
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';


export default function Home() {
  return (
    <>
      <Head>
        <title>Store in house</title> 
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header/>
      <Image src="/principal.png" alt="banner" width={2500} height={1200}></Image>
      <button  className="whatsApp"><FaWhatsapp></FaWhatsapp></button>
      <main>
        <p className="presentacion">
          <Image src="/presentacion.png" alt="presentacion" width={2500} height={1200}></Image>
        </p>
        <p className="modelos">
          <Image src="/modelos.png" alt="modelos" width={2500} height={1200}></Image>
        </p>
        <h1>Nuestros asociados</h1>
        <Slider1/>
        <Slider2/>
        <Slider3/>
        <p className="clientes">
          <Image src="/clientes.png" alt="clientes" width={2500} height={1200}></Image>
        </p>
      </main>
      <Footer/>
    </>
  )
}
