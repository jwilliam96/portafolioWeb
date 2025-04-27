import { HeaderIllustration } from "./header-illustration";
import { SvgOlaMorada } from "@/components";

export function Header() {
    return (
        <header className="relative overflow-hidden bg-linear-[189deg,#4316db_14%,#9076e7_98%] h-[890px]" >
            <div className="relative top-[-130px] xs:top-0">

                {/* OLA NARANJA  */}
                <div className="absolute w-full z- bg-no-repeat top-[137px] h-[900px] bg-[url(/svg/header/ola-naranja.svg)] max-md:bg-[25%_0%] max-xx:bg-size-[1400px]" />
                {/* BLUR  */}
                <div className="absolute w-full h-[800px] backdrop-blur-3xl z-10" />

                {/* OLA AZUL  */}
                <div className="absolute z-[20] left-0 w-full bg-[url(/svg/header/ola-azul.svg)] bg-[center_top] h-[600px] bg-no-repeat bg-size-[180%] top-[400px] md:bg-size-[100%] md:top-[380px]" />

                {/* FONDO MORADO CON CLIP-PATH OLA MORADA*/}
                <div className="clip-url-olaMorada origin-[left_top] z-[40] absolute w-full top-[520px] h-[500px] bg-linear-[#1f1f4740_-19%,#1f1f47_37%] xx:scale-150">
                    <SvgOlaMorada />
                </div>

                {/* ESTRELLAS  */}
                <div className="absolute z-50 w-full bg-[center_top] bg-repeat h-[224px] bg-[url(/svg/header/stars.svg)]" />
            </div>

            {/* HEADER  */}
            <div className="relative px-5 grid max-w-[1234px] mx-auto z-[60] xs:grid-cols-[360px_auto]">
                {/* TEXTO  */}
                <div className="relative top-[148px] grid gap-[30px] xs:gap-12 xs:top-[250px] md:top-[200px]">
                    <h1 className="grid text-4xl font-bold bg-linear-[#730040_0%,#301cbe_100%] bg-clip-text text-transparent xs:text-5xl md:text-6xl">
                        Desarrollador
                        <span>Web </span>
                        <span> Front end</span>
                    </h1>
                    <p className="leading-[130%] max-w-[300px] text-[17px]">Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.</p>
                </div>

                {/* ILUSTRACIÓN  */}
                <HeaderIllustration />

            </div>
        </header >
    )
}
