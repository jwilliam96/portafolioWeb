import { IconGitHub, IconGlobe } from "@/ui";

interface Props {
    className?: string
}

export function ButtonGitDemo({ className = "*:rounded-[30px] md:hidden *:mt-5 justify-between" }: Props) {

    return (
        <div className={`flex px-2 text-[#ffffffb3]  *:border *:border-[#ffffff7a] *:w-[100px] *:bg-linear-[#18204f66_0%,#18204f40_100%] *:px-2 *:py-1  *:gap-2 *:items-center  ${className}`}>
            {/* GITHUB  */}
            <div className="flex">
                <IconGitHub size={22} />
                <p>GitHub</p>
            </div>

            {/* DEMO  */}
            <div className="flex">
                <IconGlobe size={22} />
                <p>Demo</p>
            </div>
        </div>
    )
}
