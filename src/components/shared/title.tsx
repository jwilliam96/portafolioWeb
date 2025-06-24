import { fontRoboto } from "@/ui";

interface Props {
    title: string
}

export function Title({ title }: Props) {
    return (
        <h2 className={`font-bold text-4xl text-white text-center mb-4 md:text-5xl lg:text-6xl ${fontRoboto.className}`}>
            {title.toUpperCase()}
        </h2>
    )
}
