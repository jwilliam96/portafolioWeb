import { SiNextdotjs, SiTypescript, SiZod } from "react-icons/si";
import { IoMdCloudDownload } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoGlobeOutline, IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";

interface Props {
    className?: string
    size?: number
}

export function IconDownload({ className, size = 30 }: Props) {
    return (
        <IoMdCloudDownload className={`${className}`} size={size} />
    )
}
export function IconReact({ className, size = 30 }: Props) {
    return (
        <FaReact className={`${className}`} size={size} />
    )
}
export function IconNext({ className, size = 30 }: Props) {
    return (
        <SiNextdotjs className={`${className}`} size={size} />
    )
}
export function IconTailwind({ className, size = 30 }: Props) {
    return (
        <RiTailwindCssFill className={`${className}`} size={size} />
    )
}
export function IconTypeScript({ className, size = 30 }: Props) {
    return (
        <SiTypescript className={`${className}`} size={size} />
    )
}
export function IconZod({ className, size = 30 }: Props) {
    return (
        <SiZod className={`${className}`} size={size} />
    )
}
export function IconJavaScript({ className, size = 30 }: Props) {
    return (
        <IoLogoJavascript className={`${className}`} size={size} />
    )
}
export function IconNode({ className, size = 30 }: Props) {
    return (
        <FaNodeJs className={`${className}`} size={size} />
    )
}
export function IconGlobe({ className, size = 30 }: Props) {
    return (
        <IoGlobeOutline className={`${className}`} size={size} />
    )
}
export function IconGitHub({ className, size = 30 }: Props) {
    return (
        <FaGithub className={`${className}`} size={size} />
    )
}
