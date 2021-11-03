import Image from "next/image";

function Footer() {
    return (
        <footer>
            <div className="imagen-footer">
                <Image
                    src="/footer.png"
                    alt="Footer"
                    width={2326}
                    height={647}
                ></Image>
            </div>
        </footer>
    );
}

export default Footer;
