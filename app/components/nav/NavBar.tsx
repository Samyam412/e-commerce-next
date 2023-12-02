import Link from "next/link";
import Container from "../Container";

import { Redressed } from "next/font/google";

const redressed = Redressed({subsets:['latin'], weight:['400'] })

const Navbar = () => {
    return ( <nav className="bg-slate-700 text-slate-200 sticky top-0 z-30 w-full shadow-sm">
<div className="py-4  border-b-[1px]">
    <Container>
        <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href='/' className={`${redressed.className} font-bold text-2xl`} >
                E-shop
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex gap-8 md:gap-12 ">
                <div className="">CartCount</div>
                <div className="">UserMenu</div>
            </div>
        </div>
    </Container>
    </div>    
    </nav>);
}
 
export default Navbar;