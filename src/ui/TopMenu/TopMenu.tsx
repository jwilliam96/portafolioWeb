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
            <div>
                Logo
            </div>

            <div>
                <ToggleMenu />

                <nav
                    className="bg-[#0f0e474d] rounded-[20px] text-[#ffffffb3] dark:hidden dark:md:block md:bg-transparent">
                    <ul className="md:flex gap-10 p-5 min-w-[230px] divide-y-1 md:divide-y-0">
                        {linkNav}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
