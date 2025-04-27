import { IoMdCloudDownload } from "react-icons/io";

interface Props {
    className?: string
    size?: number
}

export function IconDownload({ className, size = 30 }: Props) {
    return (
        <IoMdCloudDownload className={`${className}`} size={size} />
    )
}
