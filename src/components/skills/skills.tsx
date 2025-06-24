import { Title } from "@/components";
import { habilidades } from "./utils/habilidades";
import { FaStar } from "react-icons/fa";

export function Skills() {
    return (
        <article className="min-h-screen mt-50">
            <Title title="habilidades" />

            <div className="max-w-[1400px] mx-auto  mt-32 flex flex-wrap gap-20 justify-center">

                {habilidades.map(item => (
                    <div key={item.title} className="relative size-42 rounded-full border border-gray-500 grid place-content-center">
                        <div className="size-16 bg-black rounded-full grid place-content-center absolute  left-1/2 -translate-x-1/2 -top-7">
                            {item.icon}
                        </div>

                        <h2 className="text-white text-center mb-2">{item.title.toLocaleUpperCase()}</h2>
                        <div className="flex gap-0.5
                        ">
                            {Array.from({ length: item.star }).map((_, i) => (
                                <FaStar key={`${item.title}-${i}`} size={25} className="text-amber-200" />
                            ))}
                        </div>
                    </div>
                ))}

            </div>

        </article>
    )
}
