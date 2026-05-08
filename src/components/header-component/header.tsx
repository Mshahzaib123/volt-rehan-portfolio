import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import gsap from "gsap";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import LogoImage from '../../assets/logo-header.png'

const Header = () => {
  const { t } = useTranslation();
  useEffect(() => {
    gsap.fromTo(".header-in", 
      { 
        y: "-100%"
      },
      { 
        y: "0%",
        duration: 0.5,
        ease: "power1.inOut"
      }
    );
  }, []);
  return (
    <header className='header-in sticky top-0 py-4 overflow-hidden z-50 shadow-lg bg-[rgba(255,255,255,0.6)]' 
      style={{backdropFilter: "blur(10px)"}}
    >
      <div className='container'>
        <div className='flex items-center justify-between gap-3'>
          <a href='' className='inline-flex'>
            <img className='h-[40px] lg:h-[56px] w-auto object-contain' src={LogoImage} alt='Logo Image' />
          </a>
          <div className='hidden lg:flex items-center py-3 px-8 gap-10 border-[1px] border-primary rounded-xl'>
            {[
              {
                link: "",
                text: "About",
              },
              {
                link: "",
                text: "Services",
              },
              {
                link: "",
                text: "Portfolio",
              },
              {
                link: "",
                text: "Faqs",
              },
              {
                link: "",
                text: "Blogs",
              }
            ].map((item, index) => (
              <a 
                href={item.link}
                key={index}
                className="text-base font-medium duration-300 hover:text-primary hover:underline"
              >
                {t(item.text)}
              </a>
            ))}
          </div>
          <a className='hidden lg:inline-flex'>
            <Button size="lg">
              {t("Contact")}
            </Button>
          </a>
          <button className='flex lg:hidden items-center justify-center w-10 h-10 rounded-lg bg-black/[10%]'>
            <MenuOutlinedIcon className='!w-6 !h-6 text-black'/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
