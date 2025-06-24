import Image from "next/image";
import { Title } from "../shared/title";
import { certificates } from "./helpers/certificates";

export function Studies() {
    return (
        <article className="min-h-screen max-w-[1200px] mx-auto">
            <Title title="estudios" />

            <div className="flex justify-between flex-wrap gap-14 my-28">
                {
                    certificates.map(certificate => (
                        <div key={certificate.title} className="">
                            <Image
                                className="h-[200px] w-[300px] object-contain"
                                alt={`certificado ${certificate.title}`}
                                src={certificate.image}
                                height={400}
                                width={300}
                            />
                            <h3 className="text-white text-center mt-3 capitalize text-xl">{certificate.title}</h3>
                        </div>
                    ))
                }
            </div>
        </article>
    )
}
