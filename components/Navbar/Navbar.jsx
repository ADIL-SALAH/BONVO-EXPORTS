"use client"

import { setActiveTab } from '@/Redux/slices/userSlice'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {

    const router = useRouter()

    const { activeTab } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    console.log(activeTab, '00000000000000000000')

    const navItems = [
        {
            name: 'HOME',
            onclick: '/'
        },
        {
            name: 'ABOUT',
            onclick: '/about'
        },
        {
            name: 'PRODUCTS',
            onclick: '/products'
        },
        {
            name: 'CONTACT US',
            onclick: '/contact'
        }
    ]

    const navbarHandler = (item, navigateTo) => {
        dispatch(setActiveTab({ activeTab: item }))
        router.push(navigateTo)
    }

    return (

        <div className="absolute z-10 top-0 flex items-center justify-between p-5 lg:px-10 w-screen">
            <div className="flex items-center  text-center">
                {/* <img className="h-16" src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png" alt="" /> */}
                <span className="ml-4 uppercase text-blue-400 font-bold">Bonvo <br /> exports</span>
            </div>
            <div className=" font-semibold text-xs md:block hidden">
                <ul className="mx-auto flex items-center">
                    {
                        navItems.map((item, index) => (
                            <li key={index} className={`p-5 xl:p-8 active cursor-pointer ${activeTab === item.name ? 'text-[#FFD700]' : 'text-white'}`} onClick={() => navbarHandler(item.name, item.onclick)}>
                                <span>{item.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar