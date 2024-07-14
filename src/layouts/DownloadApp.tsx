import Image from "next/image";

export default function DownloadApp() {
    return (
        <div>
            <div>
                <div className="flex flex-col-reverse md-lg:flex-row gap-12 p-8 md-lg:[20] relative mx-auto mt-48 app-backgound text-center md-lg:text-start items-center md-lg:items-start max-h-[25rem] max-w-[100%]">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-[2.2rem] md-lg:text-[2.6rem] text-purple-dark mb-1 font-bold">Conheça nosso app!</h1>
                            <p className="flex flex-row font-montserrat font-medium text-[1.5rem] text-[#22042f]" style={{ letterSpacing: '1px', fontWeight: '600' }}>Todas as nossas facilidades na palma da sua mão.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-48 h-16 relative">
                                <a href="/appstore">
                                    <Image
                                        src='/img/app-store.png'
                                        alt="Baixar na App Store"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </a>
                            </div>
                            <div className="w-48 h-16 relative">
                                <a href="/googleplay">
                                    <Image
                                        src='/img/logo-android.png'
                                        alt="Baixar no Google Play"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[40%] h-auto relative flex flex-col justify-end items-baseline">
                        <Image
                            className="relative"
                            style={{ transform: '' }}
                            src='/img/appkimipet.png'
                            alt='mobile app kimipet'
                            layout="responsive"
                            width={1000}
                            height={2000}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}