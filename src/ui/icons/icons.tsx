import { SiNextdotjs, SiTypescript, SiZod } from "react-icons/si";
import { IoMdCloudDownload } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoGlobeOutline, IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaNodeJs, FaPhoneAlt, FaReact, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        <FaReact className={`${className} text-[#58c4dc]`} size={size} />
    )
}
export function IconNext({ className, size = 30 }: Props) {
    return (
        <SiNextdotjs className={`${className}`} size={size} />
    )
}
export function IconTailwind({ className, size = 30 }: Props) {
    return (
        <RiTailwindCssFill className={`${className} text-[#00bcff]`} size={size} />
    )
}
export function IconTypeScript({ className, size = 30 }: Props) {
    return (
        <SiTypescript className={`${className} text-[#36c]`} size={size} />
    )
}
export function IconZod({ className, size = 30 }: Props) {
    return (
        <SiZod className={`${className} text-[#3399ff]`} size={size} />
    )
}
export function IconJavaScript({ className, size = 30 }: Props) {
    return (
        <IoLogoJavascript className={`${className} text-[#f7df1e]`} size={size} />
    )
}
export function IconNode({ className, size = 30 }: Props) {
    return (
        <FaNodeJs className={`${className} text-[#339933]`} size={size} />
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

export function IconTel({ className, size = 30 }: Props) {
    return (
        <FaPhoneAlt className={`${className}`} size={size} />
    )
}
export function IconWhatsapp({ className, size = 30 }: Props) {
    return (
        <FaWhatsapp className={`${className}`} size={size} />
    )
}
export function IconEmail({ className, size = 30 }: Props) {
    return (
        <MdEmail className={`${className}`} size={size} />
    )
}
export function IconLinkedin({ className, size = 30 }: Props) {
    return (
        <FaLinkedin className={`${className}`} size={size} />
    )
}

