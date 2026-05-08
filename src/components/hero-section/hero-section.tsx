import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../section-component/section';
import TitleComponent from '../title-component/title-component';
import { Button } from '../ui/button';
import gsap from "gsap";

import HeroImage from './hero-image';

function HeroSection() {
  const {t} = useTranslation();
  useEffect(() => {
    gsap.fromTo(".background-in", 
      { 
        x: "100%",
        opacity: 0,
      },
      { 
        x: "0%",
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        ease: "power1.inOut"
      }
    );
    gsap.fromTo(".content-in", 
      { 
        x: "-120%",
        opacity: 0,
      },
      { 
        x: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: "power1.inOut"
      }
    );
    gsap.fromTo(".image-in", 
      { 
        scale: 0,
        opacity: 0,
      },
      { 
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 0.9,
        ease: "power1.inOut"
      }
    );
  }, []);
  return (
    <Section className="relative py-10 md:py-28 overflow-hidden">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
          <div className="lg:w-1/2 content-in">
            <TitleComponent type='h1'>
              {t("Volt Helping You Reach Your Goals with Ease")}
            </TitleComponent>
            <TitleComponent type='p' size='medium' className="mt-3 md:mt-6 mb-6 md:mb-10">
              {t("Volt for Marketing Services is a marketing and advertising company specializing in providing comprehensive services in marketing and technology.")}
            </TitleComponent>
            <a className='inline-flex'>
              <Button size="lg">
                {t("Get Started")}
              </Button>
            </a>
          </div>
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <HeroImage className='image-in relative w-full h-full object-contain z-20'/>
          </div>
        </div>
      </div>
      <div className='background-in absolute top-0 end-0 w-full md:w-3/4 h-full bg-background overflow-hidden'>
        <h2 className='text-[200px] whitespace-nowrap font-extrabold absolute -bottom-32 left-1/2 -translate-x-1/2 opacity-5 z-10'>VOLT VOLT</h2>
      </div>
    </Section>
  )
}

export default HeroSection;