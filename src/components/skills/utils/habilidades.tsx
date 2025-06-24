import { IconJavaScript, IconNext, IconNode, IconReact, IconTypeScript, IconZod } from "@/ui"
import { FaCss3Alt, FaHtml5 } from "react-icons/fa"
import { ReactElement } from "react"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiPrisma } from "react-icons/si"


interface SkillsType {
    title: string
    icon: ReactElement
    star: number
}

export const habilidades: SkillsType[] = [
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
        title: "javascript",
        icon: <IconJavaScript />,
        star: 5
    },
    {
        title: "typescript",
        icon: <IconTypeScript />,
        star: 4
    },
    {
        title: "React",
        icon: <IconReact />,
        star: 4
    },
    {
        title: "next.js",
        icon: <IconNext className="text-white" />,
        star: 5
    },
    {
        title: "node.js",
        icon: <IconNode />,
        star: 4
    },
    {
        title: "postgresql",
        icon: <BiLogoPostgresql className="text-[#336791]" size={40} />,
        star: 3
    },
    {
        title: "zod",
        icon: <IconZod />,
        star: 3
    },
    {
        title: "prisma",
        icon: <SiPrisma className="text-[#0C344B]" size={40} />,
        star: 3
    },
]
