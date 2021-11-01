import Image from 'next/image';

function Header(){
    return(
        <header>
            <p className="logo"><Image src="/logo.png" alt="Logo" width={200} height={120} ></Image></p>
        </header>

    )
}

export default Header;