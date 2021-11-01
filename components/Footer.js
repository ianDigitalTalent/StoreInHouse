import Image from 'next/image';

function Footer(){
    return(
        <footer>
            <p className="imagen-footer"><Image src="/footer.png" alt="Footer" width={2326} height={647} ></Image></p>
        </footer>
    )
}

export default Footer;