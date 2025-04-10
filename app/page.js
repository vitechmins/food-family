"use client"
import About from "@/components/MainSections/About";
import AboutPhone from "@/components/MainSections/AboutPhone";
import BusinessLunch from "@/components/MainSections/BusinessLunch";
import Otzyvy from "@/components/MainSections/Otzyvy";
import OurCafe from "@/components/MainSections/OurCafe";
import OurMenu from "@/components/MainSections/OurMenu";
import Preimushestva from "@/components/MainSections/Preimushestva";
import Vizitka from "@/components/MainSections/Vizitka";
import VizitkaBlack from "@/components/MainSections/VizitkaBlack";
import BtnComp from "@/components/btn/BtnComp";
import Social from "@/components/social/Social";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export default function Home() {

  return (
    <main className="min-h-screen bg-accent" id="main">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        showDots={true}
        autoPlaySpeed={7000}
        pauseOnHover={false}
        className="w-full z-0"
      >
        <div className="h-screen relative">
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <div className="bg-[url('/fon/fon1.webp')] bg-cover sd:bg-center xz:bg-left h-full flex justify-center items-center z-0">
            <div className="container mx-auto py-16 z-20">
              <div className='text-center'>
                <p className="sd:text-7xl xz:text-4xl font-semibold text-white text-shadow mb-6">
                  Кафе в Минске
                </p>
                <p className='sd:text-2xl xz:text-lg text-white mt-4 sd:pb-6 xz:pb-12'>
                  Завтраки, обеды, ужины и приятная атмосфера, которую вы не забудете.
                </p>
                <p className='sd:text-lg xz:text-base text-white mt-4'>
                  Приходите и наслаждайтесь вкусом каждого момента вместе с нами!
                </p>

                <BtnComp title='Сделать заказ' name='Сделать заказ' index={111} center red />
              </div>

            </div>
          </div>
        </div>

        <div className="h-screen relative">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="bg-[url('/fon/fon2.webp')] bg-cover bg-center h-full flex items-center z-0">
            <div className="container mx-auto py-16 z-20">
              <div className='text-center mx-auto '>
                <p className="sd:text-7xl xz:text-4xl font-semibold text-white text-shadow mb-6">
                  Лучшие сорта кофе для вас
                </p>
                <p className='sd:text-2xl xz:text-lg text-white mt-4 sd:pb-6 xz:pb-12'>
                  Наслаждайтесь свежими и ароматными напитками, приготовленными с любовью и профессионализмом наших бариста.
                </p>
                <p className='sd:text-lg xz:text-base text-white mt-4'>
                  Приходите и откройте для себя новые вкусы и ощущения вместе с нами!
                </p>

                <BtnComp title='Сделать заказ' name='Сделать заказ' index={1112} center red />
              </div>

            </div>
          </div>
        </div>

        <div className="h-screen relative">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="bg-[url('/fon/fon3.webp')] bg-cover bg-center h-full flex items-center z-0">
            <div className="container mx-auto py-16 z-20">

              <div className='text-center'>
                <p className="sd:text-7xl xz:text-4xl font-semibold text-white text-shadow mb-6">
                  Самые вкусные десерты
                </p>
                <p className='sd:text-2xl xz:text-lg text-white mt-4 sd:pb-4 xz:pb-12'>
                  Насладитесь нашими изысканными десертами, которые придутся по вкусу каждому сладкоежке.
                </p>
                <p className='sd:text-lg xz:text-base text-white mt-4'>
                  Приходите к нам и окунитесь в мир сладких радостей и удовольствия!
                </p>

                <BtnComp title='Сделать заказ' name='Сделать заказ' index={1213} center red />
              </div>

            </div>
          </div>
        </div>
      </Carousel>

      <Vizitka />
      <BusinessLunch />
      <OurMenu />
      <About />
      <AboutPhone />
      <Preimushestva />
      <VizitkaBlack />
      <OurCafe />
      <Otzyvy />

      <Social />
    </main>
  );
}
