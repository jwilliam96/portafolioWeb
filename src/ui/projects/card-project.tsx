

import { IconGitHub, IconGlobe } from "@/components";
import Image from "next/image";

interface Props {
    className?: string
    url: string
    title: string
    // description?: string
}

export function CardProject({ className, title, url }: Props) {


    return (
        <div className="md:flex md:justify-between">

            {/* CARD  */}
            <div className="relative">
                {/* FONDO  */}
                <div className={`absolute top-5 w-[250px] h-[280px] rounded-[0_40px_40px] skew-y-[8deg] ${className} md:w-[42%] md:h-[340px] md:top-9`} />

                <div className={`relative z-10 px-3 py-4 bg-[#1f1f4799] w-[270px] h-[280px] backdrop-blur-2xl rounded-[0_30px_40px_40px] md:w-[45%] md:h-[350px]`}>

                    <Image className="mx-auto rounded-[0_25px_25px] h-[150px] object-cover md:h-[220px]" src={url} alt="imagen teslo-shop" width={1665} height={930} />

                    <h3 className="text-xl font-semibold text-center mt-2 text-[#ffffffb3]">{title}</h3>

                    {/* BOTONES / GITHUB - DEMO */}
                    <div className="flex justify-between px-2">
                        {/* GITHUB  */}
                        <div className="rounded-[30px] w-[100px] bg-linear-[#18204f66_0%,#18204f40_100%] px-2 py-1 flex gap-2 items-center mt-5 text-[#ffffffb3]  border border-[#ffffff7a]">
                            <IconGitHub size={22} />
                            <p>GitHub</p>
                        </div>

                        {/* DEMO  */}
                        <div className="rounded-[30px] w-[100px] bg-linear-[#18204f66_0%,#18204f40_100%] px-2 py-1 flex gap-2 items-center mt-5 text-[#ffffffb3]  border border-[#ffffff7a]">
                            <IconGlobe size={22} />
                            <p>Demo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESCRIPTION  */}
            <div className="hidden md:block">
                otro
            </div>
        </div>
    )
}
