import Image from "next/image";

function Header() {
    return (
        <header>
            <div className="logo">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={180}
                    height={100}
                ></Image>
            </div>
        </header>
    );
}

export default Header;
