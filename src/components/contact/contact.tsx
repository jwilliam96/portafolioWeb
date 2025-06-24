import { IconEmail, IconLinkedin, IconTel, IconWhatsapp } from "@/ui";
import { Title } from "../shared/title";
import Form from "./ui/Form";

export function Contact() {
    return (
        <article className="min-h-screen max-w-[1200px] mx-auto pb-16">
            <Title title="Contacto" />

            <div className="mt-32 grid grid-cols-2 gap-10 text-white">

                <section className="px-10">
                    <h3 className="text-5xl mb-8">Escríbeme</h3>

                    <p>Si buscas un desarrollador web comprometido, creativo y orientado a resultados, escríbeme en mis algunos de mis redes o déjame un mensaje aquí mismo</p>

                    <div className="mt-8 grid gap-6">
                        <div className="flex gap-4 items-center bg-[#0e0e2b] max-w-[400px] px-3 py-2 rounded-xl"><IconEmail /> <p>jwsa.web@gmail.com</p></div>
                        <div className="flex gap-4 items-center bg-[#0e0e2b] max-w-[400px] px-3 py-2 rounded-xl"><IconTel /> <p>+57 311-510-6911</p></div>
                        <div className="flex gap-4 items-center bg-[#0e0e2b] max-w-[400px] px-3 py-2 rounded-xl"><IconWhatsapp /> <p>3115106911</p></div>
                        <div className="flex gap-4 items-center bg-[#0e0e2b] max-w-[400px] px-3 py-2 rounded-xl"><IconLinkedin /> <p>linkedin.com/in/john-william-sanchez</p></div>
                    </div>
                </section>

                <Form />
            </div>
        </article>
    )
}
