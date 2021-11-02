import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link'

export default function WpButton(){
    return(
        <Link href="https://api.whatsapp.com/send?phone=[+549][3482506189]"  passHref >
            <a target="_blank" >
                <button  className="whatsApp"><FaWhatsapp></FaWhatsapp></button>
            </a>
        </Link>
    )
}