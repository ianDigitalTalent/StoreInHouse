import Image from "next/image";
import Link from "next/link";

export default function LogoFooter(){
    return(
        <div className="displayLogoFooter">
            <p className="textoLogoFooter">Realizado por</p>
            <Link href="https://iandigitaltalent.com/" passHref>
                <a target="_blank" className="logoFooter">
                    <Image src="/logoIan.png" alt="Logo IDT" width={8000} height={4500}></Image>
                </a>
            </Link>
        
        </div>
    )
}