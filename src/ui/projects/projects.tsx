import { IconJavaScript, IconNext, IconNode, IconReact, IconTailwind, IconTypeScript, IconZod, Title } from "@/components";
import { CardProject } from "./card-project";
import { listProject } from "./utils/helps";
import { SvgOlaMoradaProject, SvgOlaMoradaTwoProject, SvgOlaRojaProject } from "./svg/ilustraciones-olas";
import Image from "next/image";

export function Projects() {
    return (
        <article className="relative min-h-screen  ">
            {/* OLA MORADA  */}
            <div className="relative -top-40 lg:-top-72">
                <div className="absolute lg:scale-150 left-[-1px] w-full -z-10 overflow-hidden top-0 h-[250px] origin-top-left bg-linear-[200.44deg,#4316db_13.57%,#9076e7_58.38%] clip-project-ola-morada opacity-20" >
                    <SvgOlaMoradaProject />
                </div>
                {/* OLA ROJA  */}
                <div className="scale-150 absolute left-[-1px] w-full -z-10 overflow-hidden origin-[left_top] top-5 h-[250px] bg-linear-[132.86deg,#ff2424_-4.28%,#c1347a_14.43%,#491eb8_34.1%] clip-project-ola-roja">
                    <SvgOlaRojaProject />
                </div>
                {/* OLA MORADA 2 */}
                <div className="bg-linear-[#1f1f4740_-18.72%,#1f1f47_37.6%] scale-150 absolute left-[-1px] w-full -z-10 overflow-hidden origin-[left_top] backdrop-saturate-200 top-10 h-[500px]  clip-project-ola-moradaTwo">
                    <SvgOlaMoradaTwoProject />
                </div>
            </div>

            <Image className="absolute top-[380px] bg-size-[1440px] h-[600px] w-full -z-10" src={"/img/project/lineas.svg"} alt="lineas" width={1440} height={431} />
            <Image className="absolute top-[1280px] bg-size-[1440px] h-[600px] w-full -z-10" src={"/img/project/lineas.svg"} alt="lineas" width={1440} height={431} />

            <div className="max-w-[1225px] mx-auto px-4 relative mt-64 lg:mt-96">
                <Title title="proyecto" />
                <p className="text-center text-white max-w-[500px] mx-auto md:text-xl">Estos proyectos son 100% responsive, y se ha manejado tanto el lado del Front como el del Back-end</p>

                <div className="flex gap-4 mt-6 justify-center md:*:size-14 md:gap-12">
                    <IconReact />
                    <IconJavaScript />
                    <IconNext className="text-black " />
                    <IconTailwind />
                    <IconTypeScript />
                    <IconZod />
                    <IconNode />
                </div>

                <div className="grid gap-20 justify-center mt-16 md:justify-normal md:gap-20 md:mt-24">
                    {
                        listProject.map((item, index) => (
                            <CardProject key={item.title} url={item.url} title={item.title} className={`${index % 2 === 0 ? "bg-linear-[#630b8c_0%,#408dd5_100%]" : "bg-linear-[#408dd5_0%,#630b8c_100%]"}`} reverse={index % 2 === 1 && true} urlDesktop={item.urlDesktop} urlMobile={item.urlMobile} rol={item.rol} />
                        ))
                    }
                </div>
            </div>
        </article>
    )
}
