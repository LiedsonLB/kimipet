import Image from "next/image";
import imgTest from "/public/img/logo-kimipet-text-orange.png"

export default function ExperenceComents() {
    return (
        <div>
            <section>
                <div>
                    <Image
                    src={imgTest}
                    alt="img profile user"
                    />
                    <p>Texto de modelo</p>
                </div>
                <div>
                    <p>Ivanaldo Souza</p>
                    <p>centro animal vida</p>
                </div>
            </section>

            <section>
                <div>
                    <Image
                    src={imgTest}
                    alt="img profile user"
                    />
                    <p>Texto de modelo</p>
                </div>
                <div>
                    <p>Ivanaldo Souza</p>
                    <p>centro animal vida</p>
                </div>
            </section>
        </div>
    )
}