import { footerInfo } from "../../assets/constants/footerInfo"
import { FooterInfoCreator } from "../footer/FooterInfoCreator"
import { HEADER_COLOR } from "../../assets/constants/colors"

export const Footer = ()=>{
    return (
        <>
            <footer className="footer-container">
                <section class='flex h-3/4 bg-footer'>
                    <ul class='flex w-full'>
                        {
                            footerInfo.map((info)=>(
                                <FooterInfoCreator title={info.title} links={info.links}/>
                            ))
                        }
                    </ul>
                </section>

                <footer class='bg-header h-1/4'>
                    <ul class='text-white flex justify-evenly h-full items-center'>
                        <li>
                            <a href="">
                                <b>Términos y condiciones</b>
                            </a>
                        </li>

                        <li>
                        <a href="">
                                <b>Privacidad</b>
                            </a>
                        </li>

                        <li>
                            <b>Millenium Manía C.A</b>
                        </li>

                        <li>
                            <a href="">
                                <b>© 2024 todos los derechos reservados</b>
                            </a>
                        </li>
                    </ul>
                </footer>
            </footer>
        </>
    )
}
