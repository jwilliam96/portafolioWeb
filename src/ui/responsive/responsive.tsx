import { Title } from "@/components";
import Image from "next/image";

export function Responsive() {
    return (
        <div className="min-h-screen mt-40 max-w-[1200px] mx-auto">
            <Title title="proyectos adaptables" />
            <div className="mt-20">
                <Image src={"/img/responsive/fondo-hombre.webp"} alt="fondo hombre" width={2216} height={1556} />
            </div>
        </div>
    )
}
