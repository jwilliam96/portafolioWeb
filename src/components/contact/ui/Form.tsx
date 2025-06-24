
export default function Form() {
    return (
        <form className=" w-full max-w-[500px] text-xl px-5">
            <div className="grid gap-2 mb-4">
                <label className="ml-2" htmlFor="">Nombre</label>
                <input type="text" className="bg-[#35357d] rounded-[5] py-2 pl-5" />
            </div>
            <div className="grid gap-2 mb-4">
                <label className="ml-2" htmlFor="">Apellido</label>
                <input type="text" className="bg-[#35357d] rounded-[5] py-2 pl-5" />
            </div>
            <div className="grid gap-2 mb-4">
                <label className="ml-2" htmlFor="">Correo electrónico</label>
                <input type="text" className="bg-[#35357d] rounded-[5] py-2 pl-5" />
            </div>
            <div className="grid gap-2 mb-4">
                <label className="ml-2" htmlFor="">Mensaje</label>
                <textarea className="bg-[#35357d] rounded-[5] py-2 pl-5 resize-none h-[150px]" />
            </div>
            <button className="bg-[#5120cd] block mx-auto px-14 py-1 mt-8 rounded-[5]">Enviar</button>
        </form>
    )
}
