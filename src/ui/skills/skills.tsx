import { Title } from "@/components";
import { habilidades } from "./utils/habilidades";

export function Skills() {
    return (
        <article className="min-h-screen mt-50">
            <Title title="habilidades" />

            <div className="max-w-[1400px] mx-auto h-[700px] mt-32 md:flex md:justify-between">

                {habilidades.map(item => (
                    <div key={item.title} className="relative size-42 rounded-full border border-gray-500 grid place-content-center">
                        <div className="size-16 bg-black rounded-full grid place-content-center absolute  left-1/2 -translate-x-1/2 -top-7">
                            {item.icon}
                        </div>

                        <h2 className="text-white">{item.title.toLocaleUpperCase()}</h2>
                    </div>
                ))}

            </div>

        </article>
    )
}
