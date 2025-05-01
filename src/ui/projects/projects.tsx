import { IconJavaScript, IconNext, IconNode, IconReact, IconTailwind, IconTypeScript, IconZod, Title } from "@/components";
import { CardProject } from "./card-project";
import { listProject } from "./utils/helps";

export function Projects() {
    return (
        <article className="min-h-screen mt-32 max-w-[1225px] mx-auto px-4">
            <Title />
            <p className="text-center text-white max-w-[500px] mx-auto md:text-xl">Estos proyectos son 100% responsive, y se ha manejado tanto el lado del Front como el del Back-end</p>

            <div className="flex gap-4 mt-6 justify-center md:*:size-14 md:gap-12">
                <IconReact className="text-[#58c4dc]" />
                <IconJavaScript className="text-[#f7df1e]" />
                <IconNext className="text-black " />
                <IconTailwind className="text-[#00bcff]" />
                <IconTypeScript className="text-[#36c]" />
                <IconZod className="text-[#3399ff]" />
                <IconNode className="text-[#339933]" />
            </div>

            <div className="grid gap-20 justify-center mt-16 md:justify-normal md:gap-32 md:mt-24">
                {
                    listProject.map((item, index) => (
                        <CardProject key={item.title} url={item.url} title={item.title} className={`${index % 2 === 0 ? "bg-linear-[#630b8c_0%,#408dd5_100%]" : "bg-linear-[#408dd5_0%,#630b8c_100%]"}`} reverse={index % 2 === 1 && true} />
                    ))
                }
            </div>
        </article>
    )
}
