import { IconGitHub, IconGlobe, IconJavaScript, IconNext, IconNode, IconReact, IconTailwind, IconTypeScript, IconZod, Title } from "@/components";
import Image from "next/image";

export function Projects() {
    return (
        <article className="min-h-screen mt-32 max-w-[1225px] mx-auto px-4">
            <Title />
            <p className="text-center text-white">Estos proyectos son 100% responsive, y se ha manejado tanto el lado del Front como el del Back-end</p>

            <div className="flex gap-4 mt-6 justify-center">
                <IconReact className="text-[#58c4dc]" />
                <IconJavaScript className="text-[#f7df1e]" />
                <IconNext className="text-black " />
                <IconTailwind className="text-[#00bcff]" />
                <IconTypeScript className="text-[#36c]" />
                <IconZod className="text-[#3399ff]" />
                <IconNode className="text-[#339933]" />
            </div>

            <div className="grid justify-center mt-16">

                {/* CARD  */}
                <div className="relative">
                    <div className="relative z-10 px-3 py-4 bg-[#1f1f4799] w-[270px] h-[280px] backdrop-blur-2xl rounded-[0_30px_40px_40px]">

                        <Image className="mx-auto rounded-[0_25px_25px] h-[150px] object-cover" src={"/img/project/teslo-shop.png"} alt="imagen teslo-shop" width={1665} height={930} />

                        <h3 className="text-xl font-semibold text-center mt-2 text-[#ffffffb3]">Teslo-Shop</h3>

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

                    {/* FONDO  */}
                    <div className="absolute top-5 w-[250px] h-[280px] rounded-[0_40px_40px] bg-linear-[#630b8c_0%,#408dd5_100%] skew-y-[8deg]" />
                </div>
            </div>
        </article>
    )
}
