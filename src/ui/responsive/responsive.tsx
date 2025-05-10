import { Title } from "@/components";
import Image from "next/image";

export function Responsive() {
    return (
        <article className="min-h-screen mt-40 max-w-[1200px] mx-auto">
            <Title title="proyectos adaptables" />
            <p></p>

            {/* CONTAINER IMÁGENES  */}
            <div className="mt-20">
                <Image className="w-full object-contain" src={"/img/responsive/img-responsive.webp"} alt="fondo hombre" width={1191} height={817} />
            </div>
        </article>
    )
}
