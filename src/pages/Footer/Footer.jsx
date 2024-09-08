import { Faq } from '@/components/customs/Faq'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="footer h-[50vh] bg-black/50 flex justify-between p-3 overflow-hidden gap-3">
                <div className="faqs w-[50%] p-5 text-white">
                    <div className="flex-col flex items-start justify-center h-full rounded-lg p-3 bg-black/40">
                        <h3 className="text-3xl  w-full font-semibold tracking-tight">
                            FAQs
                        </h3>
                        <div className="faqs w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                            <Faq />
                        </div>
                    </div>
                </div>
                <div className="links w-full h-full  p-5">

                    <div className="container h-full p-4 gap-3 w-full  flex rounded-lg text-white bg-black/40">

                        <div className="contaienr  w-full h-full flex flex-col p-3">
                            <div className="heading">
                                <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                    Explore
                                </h4>
                            </div>
                            <div className="links flex flex-col  h-full items-start justify-start gap-5 p-3">
                                <Link to={'/'}><p className="">Home</p></Link>
                                <Link to={'/'}><p className="">About</p></Link>
                                <Link to={'/'}><p className="">Services</p></Link>
                                <Link to={'/'}><p className="">Team</p></Link>
                            </div>
                        </div>
                        <div className="contaienr  w-full h-full flex flex-col p-3">
                            <div className="heading">
                                <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Resources
                                </h4>
                            </div>
                            <div className="links flex flex-col  h-full items-start justify-start gap-5 p-3">
                                <Link to={'/'}><p className="">Documentation</p></Link>
                                <Link to={'/'}><p className="">Privacy Policy</p></Link>
                                <Link to={'/'}><p className="">Press Files</p></Link>
                            </div>
                        </div>
                        <div className="contaienr  w-full h-full flex flex-col p-3">
                            <div className="heading">
                                <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                    Contacts
                                </h4>
                            </div>
                            <div className="links flex flex-col  h-full items-start justify-start gap-5 p-3">
                                <Link to={'/'}><p className="">+91 89620 87798</p></Link>
                                <Link to={'/'}><p className="">devranishivam1121@gmail.com</p></Link>
                            </div>
                        </div>

                        

                    </div>
                   

                </div>
            </div>
            <div className="creadits w-full py-5  h-5 bg-black/80 flex items-center justify-center text-lg text-white font-semibold tracking-tight">
                TEAM • TOURIST
            </div>
        </>
    )
}

export default Footer