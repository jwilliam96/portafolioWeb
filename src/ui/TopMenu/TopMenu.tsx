import { ToggleMenu } from "./ToggleMenu";
import Link from "next/link";

export function TopMenu() {

    const listNav: string[] = ["Sobre mi", "Habilidades", "Proyectos", "Contacto"]
    const linkNav = listNav.map((list) => (
        <li key={list} className="p-2.5 cursor-pointer md:p-0">
            <Link href={`#${list}`}>{list}</Link>
        </li>
    ))

    return (
        <div className="fixed top-0 left-0 right-0 max-w-[1230px] mx-auto flex justify-between mt-8 px-8 text-white md:items-center z-[100]">
            <div className="md:text-xl">
                Logo
            </div>

            <div>
                <ToggleMenu />

                <nav className="text-[#ffffffb3] bg-[#0f0e474d] backdrop-blur-2xl backdrop-brightness-[80%] backdrop-saturate-150 rounded-[20px] md:bg-transparent md:backdrop-blur-none md:backdrop-brightness-100 md:backdrop-saturate-100 md:text-white">

                    <ul className="hidden dark:block p-5 min-w-[230px] divide-y-1 md:divide-y-0 md:text-xl md:flex md:gap-10 md:dark:flex">
                        {linkNav}
                    </ul>


                </nav>
            </div>
        </div>
    )
}
