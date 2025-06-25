
import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SvgOlaAzul } from "./svg/svg-ola-azul";
import SvgOlaAzulOscuro from "./svg/svg-ola-azul-oscuro";

export function Footer() {
    return (
        <footer className="text-white relative" id="footer">

            <div className="absolute w-full overflow-hidden clip-footer-ola-azul z-[-1] top-0 h-[250px] block bg-linear-[#176ab1_11.94%,#cbd8f1_80.98%] lg:scale-150 lg:-left-1">
                <SvgOlaAzul />
            </div>
            <div className="absolute w-full -z-1 overflow-hidden clip-footer-ola-azul-oscuro top-[30px] h-[350px] bg-linear-[#130c3ecc_0%,#1e1357_28%] lg:scale-150 lg:-left-1 lg:top-34">
                <SvgOlaAzulOscuro />
            </div>

            <article className="md:flex place-content-evenly pt-52">
                <section className="py-4 ">
                    <h3 className="text-center text-2xl font-bold pb-3">
                        CONTACTO
                    </h3>
                    <div className="max-w-max m-auto">
                        <div className="flex items-center">
                            <MdLocationOn size={20} className="mx-3" />

                            <span> Medellin - Colombia</span>
                        </div>
                        <div className="flex items-center">
                            <FaWhatsapp size={20} className="mx-3" />
                            <span>+57 311-510-69-11</span>
                        </div>
                        <div className="flex items-center">
                            <FaLinkedin size={20} className="mx-3" />

                            <Link href="https://linkedin.com/in/john-william-sanchez-atehortua-181aa5288">
                                linkedin.com/in/john-william-sanchez
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <MdEmail size={20} className="mx-3" />

                            <span>jwsa.web@gmail.com</span>
                        </div>
                    </div>
                </section>

                <section className="hidden md:block">
                    <h3 className="text-center text-2xl font-bold py-3">
                        OTROS PROYECTOS
                    </h3>
                    <ul className="text-center">
                        <li>Api del clima</li>
                        <li>Pokedex</li>
                        <li>Galleta de la fortuna</li>
                        <li></li>
                    </ul>
                </section>

                <section className="pb-4 md:py-4">
                    <h3 className="text-center text-2xl font-bold pb-3">
                        CERTIFICADOS
                    </h3>
                    <ul className="flex justify-center gap-8 md:block">
                        <li className="hidden md:inline">Programacion desde cero</li>
                        <li>
                            Front-End{" "}
                            <span className="hidden md:inline">Web Development</span>
                        </li>
                        <li>
                            Back-End <span className="hidden md:inline">Web Development</span>
                        </li>
                        <li>
                            Full-Stack{" "}
                            <span className="hidden md:inline">Web Development</span>
                        </li>
                    </ul>
                </section>
            </article>

            <section className="text-center text-[#d7d542] p-6">
                <p>
                    © 2023 <span>William</span> - Todos los derechos reservados
                </p>
            </section>
        </footer>
    )
}
