import { IconNode, IconReact, IconTypeScript } from "@/components"
import { ReactElement } from "react"
import { FaCss3Alt, FaHtml5 } from "react-icons/fa"


interface SkillsType {
    title: string
    icon: ReactElement
    star: number
}

export const habilidades: SkillsType[] = [
    {
        title: "React",
        icon: <IconReact />,
        star: 5
    },
    {
        title: "html",
        icon: <FaHtml5 className="text-[#ff5733]" size={35} />,
        star: 5
    },
    {
        title: "Css",
        icon: <FaCss3Alt className="text-[#2965f1]" size={35} />,
        star: 5
    },
    {
        title: "typescript",
        icon: <IconTypeScript />,
        star: 5
    },
    {
        title: "node.js",
        icon: <IconNode />,
        star: 5
    },
]
