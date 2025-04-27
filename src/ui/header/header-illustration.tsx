import Image from "next/image";

export function HeaderIllustration() {
    return (
        <div className="relative scale-75 top-[60px] left-[-10px] perspective-[5000px] perspective-origin-[left_bottom] transform-flat">

            {/* CARD 1  */}
            <figure className="w-[183px] h-[120px] absolute top-[150px] left-[-37px] rounded-[10px] bg-radial-[218.51%_281.09%_at_100%_100%,_#fd3f3399_0%,_#4c00c899_45.83%,_#4c00c899_100%]">

                <Image src={"/svg/header/mockup-card2.svg"} alt="card 1" width={183} height={120} />
            </figure>

            {/* CARD 2  */}
            <figure className="w-[183px] h-[120px] absolute top-[150px] left-[176px] rounded-[10px] bg-linear-[192.64deg,#4316db_12.72%,#9076e7_54.49%,#a2eeff_100%]">
                <Image src={"/svg/header/mockup-card2.svg"} alt="card 2" width={183} height={120} />
            </figure>

            {/* CARD 3  */}
            <figure className="bg-[#170c3d4d] w-[701px] h-[428px] rounded-[10px] absolute top-[200px] backdrop-blur-[10px]">
                <Image src={"/svg/header/mockup-content.svg"} alt="card 3" width={701} height={428} />
            </figure>

            {/* CARD 4  */}
            <figure className="bg-[#170c3d33] w-[400px] h-[273px] rounded-[10px] absolute top-[370px] left-[40px] backdrop-blur-[10px]">
                <Image src={"/svg/header/mockup2-bg.svg"} alt="card 4" width={400} height={273} />
            </figure>

            {/* CARD 5  */}
            <figure className="bg-[#170c3d33] w-[414px] h-[273px] rounded-[10px] absolute top-[400px] left-[340px] backdrop-blur-[10px]">
                <Image src={"/svg/header/mockup3-bg.svg"} alt="card 5" width={414} height={273} />
            </figure>

        </div>
    )
}
