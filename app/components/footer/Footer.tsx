import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook } from 'react-icons/md'
import {AiFillTwitterCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 text-sm mt-16">
      <Container>
        <div
          className="flex flex-col md:flex-row
         justify-between pt-16 pb-8 "
        >
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptop</Link>
            <Link href="#">Desktop</Link>
            <Link href="#">Watch</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Services</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
        
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-base font-bold mb-2">About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris.
              </p>
              <p>&copy; {new Date().getFullYear()} E~shop. All rights reserved</p>
            </div>
          <FooterList>

          <h3 className="text-base font-bold mb-2">Follow Us</h3>

          <div className="flex gap-2">
            
          <Link href="#"><MdFacebook size={24}/></Link>
          <Link href="#"><AiFillTwitterCircle size={24}/></Link>
          <Link href="#"><AiFillInstagram size={24}/></Link>
          <Link href="#"><AiFillYoutube size={24}/></Link>
          </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
