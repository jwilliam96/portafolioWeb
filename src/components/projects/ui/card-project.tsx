

import Image from "next/image";
import { ButtonGitDemo } from "./button-gitDemo";

interface Props {
    className?: string
    url: string
    title: string
    // description?: string
    reverse?: boolean
    urlDesktop?: string
    urlMobile?: string
    rol?: string
}

export function CardProject({ className, title, url, reverse, urlDesktop, urlMobile, rol }: Props) {


    return (
        <div className="md:grid md:grid-cols-2 gap-6">

            {/* CARD MOBILE*/}
            <div className={`relative px-4 ${reverse && "order-1"} mx-auto md:hidden`}>
                {/* FONDO  */}
                <div className={`absolute top-5 w-[250px] h-[280px] rounded-[0_40px_40px] skew-y-[8deg] ${className} md:w-full md:max-w-[350px] md:h-[310px] md:top-9`} />

                <div className={`relative z-10 px-3 py-4 bg-[#1f1f4799] w-[270px] h-[280px] backdrop-blur-2xl rounded-[0_30px_40px_40px] md:w-full md:max-w-[390px] md:h-[320px]`}>

                    <Image className="mx-auto rounded-[0_25px_25px] h-[150px] object-cover md:h-[220px]" src={url} alt="imagen teslo-shop" width={1665} height={930} />

                    {/* TITLE  */}
                    <h3 className="text-xl font-semibold text-center mt-2 text-[#ffffffb3] md:hidden">{title}</h3>

                    {/* BOTONES / GITHUB - DEMO */}
                    <ButtonGitDemo />

                </div>
            </div>

            {/* DESKTOP CARD  */}
            <div className={`gap-4 ${reverse && "order-1"} hidden md:flex`}>
                <figure className="flex items-center">
                    <Image priority className="w-[460px] h-auto fill-white drop-shadow-2xl drop-shadow-white/20" src={urlDesktop ?? ""} alt="img" width={1280} height={719} />
                </figure>
                <figure className="flex items-center">
                    <Image className="w-[130px] h-auto fill-white drop-shadow-2xl drop-shadow-white/20" src={urlMobile ?? ""} alt="img}" width={504} height={917} />
                </figure>

            </div>


            {/* DESCRIPTION  */}
            <div className="hidden md:block max-w-[490px] mx-auto px-10 py-6 rounded-3xl border border-gray-600 bg-[#18173e]">
                <p className="text-[#ffffffb3] mb-4">{rol}</p>
                <h3 className=" text-3xl mb-4 font-bold text-white lg:text-4xl">{title}</h3>
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo impedit quod excepturi itaque enim non adipisci unde natus molestias sapiente, consequuntur pariatur, quia, praesentium voluptas veniam reiciendis fugiat dolore necessitatibus.</p>

                <ButtonGitDemo className="mt-14 *:rounded-[10px] gap-10" />
            </div>
        </div>
    )
}
