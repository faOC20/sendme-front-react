import { footerInfo } from "../../assets/constants/footerInfo"
import { FooterInfoCreator } from "../footer/FooterInfoCreator"
import { HEADER_COLOR } from "../../assets/constants/colors"
import { WhatsappIcon } from "../../assets/icons/WhatsappIcon"
import { FacebookIcon } from "../../assets/icons/FacebookIcon"
import {InstagramIcon} from '../../assets/icons/InstagramIcon'

export const Footer = ()=>{
    return (
        <>
            <footer className="footer-container phone:hidden">
                <section class='flex h-3/4 w-full justify-center bg-footer'>
                    <ul class='flex w-full'>
                        {
                            footerInfo.map((info)=>(
                                <FooterInfoCreator title={info.title} links={info.links}/>
                            ))
                        }

                        <li className="flex-grow  flex flex-col items-center pt-2">
                            <b>Síguenos</b>
                            <div className="flex gap-3">
                            <a href="">
                                <FacebookIcon/>
                            </a>
                            <a href="">
                                <InstagramIcon/>
                            </a>
                            </div>
                        </li>
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
