"use client"
import { Heart, ShoppingCart, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MenuList } from './Menu-list'
import ItemsMenuMobile from './Items-menu-mobile'
import { ToggleTheme } from './Toggle-theme'

const Navbar = () => {

    const router = useRouter()

  return (
    <div className='flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl'>
        <h1 className='text-3xl' onClick={() => router.push("/")} >Caffé
            <span className='font-bold'>Spot</span>
        </h1>
        <div className='items-center justify-between hidden sm:flex'>
            <MenuList />
        </div>
        <div className='flex sm:hidden'>
            <ItemsMenuMobile />
        </div>
        <div className='flex items-center justify-between gap-2 sm:gap-7'>
            <ShoppingCart strokeWidth={"1"} className='cursor-pointer' onClick={() => router.push("/cart")} />
            <Heart strokeWidth={"1"} className='cursor-pointer' onClick={() => router.push("/cart")} />
            <User strokeWidth={"1"} className='cursor-pointer' onClick={() => router.push("/cart")} />
            <ToggleTheme />
        </div>
    </div>
  )
}

export default Navbar
