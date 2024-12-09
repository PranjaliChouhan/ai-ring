import { useCallback, useEffect, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import left from '@/assets/icons/left-preview.svg'
import right from '@/assets/icons/right-preview.svg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import 'swiper/css'
import steam from '@/assets/icons/icon-steam.svg'
import AppleIcon from '@/assets/icons/icon-apple.svg'
import pc from '@/assets/icons/icon-pc.svg'
import down from '@/assets/icons/li_chevron-down.svg'

import { roadmapData } from '../data/roadmapData'
import RoadmapCard from '../components/Cards/RoadmapCard'

import { otherpartners } from '@/data/otherpartners'
import partners from '@/data/partners'
import { ourteam } from '@/components/Team/ourTeam'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Tabs, Tab } from '@/components/tabs'
import frame1 from '@/assets/icons/Frame (1).svg'
import frame2 from '@/assets/icons/Frame (2).svg'
import frame3 from '@/assets/icons/Frame (3).svg'
import frame4 from '@/assets/icons/Frame (4).svg'
import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { LiaTelegramPlane } from 'react-icons/lia'
import GamePlay from '@/components/GamePlay'
import GameCard from '@/components/ui/GameCard'
import { Game, gamesData } from '@/data/game'
import { ArrowUpRight } from 'lucide-react'
import DownloadSection from '@/components/HomePageCard'

// const videos = [
//   {
//     id: 1,
//     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//     thumbnail:
//       'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733135230/1_5_k5qbji.webp',
//     duration: '0:37',
//   },
//   {
//     id: 2,
//     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//     thumbnail:
//       'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733135230/1_6_iruxrf.webp',
//     duration: '0:51',
//   },
//   {
//     id: 3,
//     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//     thumbnail:
//       'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733135230/1_8_elconp.webp',
//     duration: '0:28',
//   },
//   {
//     id: 4,
//     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//     thumbnail:
//       'https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733135230/1_7_bc3rpq.webp',
//     duration: '6:22',
//   },
// ]
function Homepagemcrt() {
  const [visibleCount, setVisibleCount] = useState(16)
  // const [activeVideo, setActiveVideo] = useState(videos[0])

  const registerHandler = () => {
    window.location.href = 'https://lobby.magiccraft.io/register'
  }

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }

  const kolTeam = ourteam.filter((member) => member.category === 'KOL')
  const teamMembers = ourteam.filter((member) => member.category === 'Team')

  const adjustDividerHeight = useCallback(() => {
    const dividers = document.querySelectorAll('.divider')
    dividers.forEach((divider) => {
      const parentElement = divider.parentElement
      if (parentElement) {
        const gridHeight = parentElement.clientHeight
        ;(divider as HTMLElement).style.height = `${gridHeight}px`
      }
    })
  }, [])

  useEffect(() => {
    adjustDividerHeight()
  }, [visibleCount, adjustDividerHeight])

  useEffect(() => {
    window.addEventListener('resize', adjustDividerHeight)
    return () => {
      window.removeEventListener('resize', adjustDividerHeight)
    }
  }, [adjustDividerHeight])

  const playonappleHandler = () => {
    window.location.href =
      'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525'
  }
  // const playonpcHandler = () => {
  //   window.location.href =
  //     'https://mc-game-public.s3.eu-central-1.amazonaws.com/MagicCraft+4.27.9109.zip'
  // }
  const playonsteamHandler = () => {
    window.location.href =
      'https://store.steampowered.com/app/2395760/MagicCraft/'
  }
  const getfromgoogleHandler = () => {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en'
  }
  const discordmagiccraftHandler = () => {
    window.location.href = 'https://discord.com/invite/magiccraftgame'
  }
  const telegrammagiccrftHandler = () => {
    window.location.href = 'https://t.me/magiccraftgamechat'
  }

  // const navigate = useNavigate()

  // const magicrunnerhandleClick = () => {
  //   navigate('/magicrunner')
  // }

  const filteredGames = gamesData.filter(
    (game: { title: string }) =>
      game.title === 'magicflutter' ||
      game.title === 'magicchess' ||
      game.title === 'tetrablox' ||
      game.title === 'runescribes' ||
      game.title === 'magicrunner'
  )
  return (
    <>
      <div className="min-h-dvh w-full text-white">
        <Header />
        <main className="-mt-[70px] scroll-smooth pb-32">
          {/*header*/}
          <section className="min-h-screen relative h-[700px]  bg-cover bg-center">
            <video
              className="absolute  inset-0 h-full w-full object-cover "
              autoPlay
              loop
              muted
            >
              <source
                src="https://res.cloudinary.com/dfzcr2ch4/video/upload/v1717166775/video_gokp2f.mp4"
                type="video/mp4"
              />
            </video>
            <div className="video-bg-gradient absolute inset-0  h-full w-full"></div>
            <div className="relative z-10 mx-auto  max-w-screen-xl">
              <div className="grid h-full w-full grid-cols-1 place-items-center gap-2  py-28 md:gap-4">
                <div className="w-full  max-w-[20%] md:w-full md:max-w-28">
                  <img
                    src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717331155/mcrt-icon_oewidv.webp"
                    alt="MCRT Token"
                  />
                </div>
                <h1 className="max-w-4xl text-balance text-center font-serif text-4xl text-white drop-shadow-lg  md:text-6xl">
                  <div className=" flex justify-center ">
                    <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173072/MagicCraft_1_txz7ga.webp"  alt="MCRT Icon"/>
                  </div>
                  <span className="text-3xl">WHERE PLAY MEANS PROSPERITY</span>
                </h1>
              </div>
              {/* <div className="  mx-[2em]  md:mx-auto md:mb-20  md:mt-4 md:w-[35em]  ">
                <div className="rounded-[1.25em]   bg-gradient-to-b from-[#B591F2]   to-transparent p-px ">
                  <div className="relative   max-w-full flex-col    overflow-hidden rounded-[1.25em]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%   md:px-11 md:py-3">
                    <h4 className="  mx-[3em] py-2  text-center font-serif text-lg md:text-[1.375em] ">
                      <span className="text-[#FFB649]  ">PLAY </span> MAGICCRAFT
                      NOW!
                      <br />
                    </h4>
                    <div className="flex items-center justify-center ">
                      <div className="m-4 flex flex-row items-center gap-[20px]">
                        <span
                          className=" hidden cursor-pointer md:block"
                          onClick={playonpcHandler}
                        >
                          <div className="m-4 h-6 w-6">
                            {' '}
                            <img src={pc}></img>
                          </div>
                          Download
                          <br />
                          <p className=" text-lg font-bold md:text-lg ">PC</p>
                        </span>

                        <div className="hidden h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent md:block " />

                        <span
                          className="cursor-pointer   "
                          onClick={playonappleHandler}
                        >
                          <div className="m-4 h-6 w-6">
                            {' '}
                            <img src={AppleIcon}></img>
                          </div>
                          Get it on
                          <div className=" text-sm font-bold md:text-lg  ">
                            App Store
                          </div>
                        </span>
                        <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />

                        <span
                          className=" cursor-pointer   "
                          onClick={playonsteamHandler}
                        >
                          <div className="m-4 h-6 w-6">
                            {' '}
                            <img src={steam}></img>
                          </div>
                          Get it on
                          <br />
                          <div className="flex flex-row text-sm font-bold md:text-lg">
                            Steam
                          </div>
                        </span>
                        <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />

                        <span
                          className=" cursor-pointer   "
                          onClick={getfromgoogleHandler}
                        >
                          <div className="m-4 h-6 w-6">
                            {' '}
                            <img src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp"></img>
                          </div>
                          Get it on
                          <br />
                          <div className="flex flex-row text-sm font-bold md:text-lg">
                            Google play
                          </div>
                        </span>
                      </div>

                      <div
                        style={{ right: '25px' }}
                        className="absolute -bottom-10 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]"
                      >
                        !
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
             <div className='lg:mt-[5rem]'>
                  <DownloadSection/>
                  </div> 
            </div>
           
          </section>
          
          {/*register now */}

          <section className="relative flex  flex-col items-center justify-center bg-[#020418] p-4 md:py-5 md:flex-row  ">
            <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
              <div className="mx-auto flex w-full max-w-[400px] flex-col items-center justify-center space-y-6 md:mx-0 md:max-w-none md:items-start">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="bg-gradient-to-b from-white to-white/75 bg-clip-text  font-serif text-2xl text-transparent drop-shadow-xl ">
                    <div className="text-4xl font-bold ">
                      A NEW ERA IN GAMING
                    </div>

                    <div className="text-2xl font-bold ">WITH MAGICCRAFT</div>
                  </h3>
                  <p className="text-center text-base opacity-90 md:text-left md:text-lg">
                    MagicCraft is a Play-to-Earn blockchain game featuring
                    fast-paced multiplayer battles. Every day, thousands of
                    players earn our utility token, MCRT, by showcasing their
                    skills. Join them to step into a new era of gaming where
                    your prowess can pave the path to prosperity.
                  </p>
                </div>
                <div className="flex w-full justify-center md:justify-start">
                  <button
                    onClick={registerHandler}
                    className="rounded-lg border-2 border-[#98FFF9] px-6 py-3 font-bold text-[#98FFF9] "
                  >
                    Register Now
                  </button>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[400px] p-4 md:mx-0 md:max-w-[538px] md:p-10">
                <Swiper
                  id="1"
                  className="md:w-full "
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  onSwiper={(swiper) => console.log(swiper)}
                  navigation={{ prevEl: '.arrow-left', nextEl: '.arrow-right' }}
                  autoHeight={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                >
                  <SwiperSlide
                    style={{ marginRight: '0 !important' }}
                    className="h-full w-10/12"
                    key="testimonial-1"
                  >
                    <div className="testimonials  flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid ">
                      <div className="rounded-3xl bg-[#151149]   bg-opacity-70 bg-gradient-to-r">
                        <div className=" max-w-[310px]  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                          <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                            <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Julius Joseph`}</div>
                          </button>
                          <div className=" relative z-[3] h-[21px] w-5 " />
                          <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                            <div className="relative inline-block max-w-full  flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                              Well, my testimony might not be huge like most
                              here but one thing that is evident is that God has
                              actually use Magiccraft to come through for me at
                              my lowest moment. Best thanks to the Team,
                              Magiccraft to the moon 🌙🌙🌙.
                            </div>
                          </div>
                          <div className="flex flex-row gap-10 lg:mt-5">
                            <div className=" m-2 flex flex-wrap">
                              <img src={frame1} className="mr-2" alt="Icon" />
                              83
                            </div>
                            <div className=" m-2 flex flex-wrap">
                              <img src={frame2} className="mr-2" alt="Icon" />
                              61
                            </div>
                            <div className=" m-2 flex flex-wrap">
                              <img src={frame3} className="mr-2" alt="Icon" />
                              2.0k
                            </div>
                            <div className=" m-2 flex flex-wrap">
                              <img src={frame4} className="mr-2" alt="Icon" />
                              308.6k
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    style={{ marginRight: '0 !important' }}
                    className="h-full w-10/12"
                    key="testimonial-2"
                  >
                    <div className="testimonials flex h-full w-full flex-col items-start justify-start self-stretch rounded-3xl border-[1px] border-solid">
                      <div className="rounded-3xl bg-[#151149]    bg-opacity-70 bg-gradient-to-r">
                        <div className=" max-w-[310px]  rounded-3xl bg-gradient-to-b from-[#151149]  to-[#190E29] to-80% p-4  md:max-w-none">
                          <button className=" z-[3] flex cursor-pointer flex-row items-start justify-start gap-[9px] rounded-3xl border-[1px] border-solid bg-[transparent] px-[12px] [backdrop-filter:blur(23px)] [background:linear-gradient(97.86deg,_#3f107a,_#740fb1),_linear-gradient(255.08deg,_#57186d,_#2a0d4e),_rgba(45,_44,_134,_0.8)]">
                            <div className="font-futura relative m-0 inline-block !bg-clip-text p-0 text-right text-base font-medium text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))]">{`Didabban`}</div>
                          </button>
                          <div className=" relative z-[3] h-[21px] w-5 " />
                          <div className="rounded-39xl z-[3] flex max-w-full flex-row items-start justify-start gap-[9px] self-stretch [backdrop-filter:blur(23px)] ">
                            <div className="relative inline-block max-w-full flex-1 !bg-clip-text  font-medium [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.75))] lg:mt-4">
                              My game play was seriously affected because I was
                              using a phone with low RAM. But thanks to
                              Magiccraft, I was able to buy a Redmi Note 12 for
                              around $200! Now I can enjoy a better gaming
                              experience and earn more MCRT.
                            </div>
                          </div>
                          <div className="flex flex-row gap-10 lg:mt-5">
                            <div className=" m-2 flex flex-wrap">
                              <img src={frame1} className="mr-2" alt="Icon" />
                              83
                            </div>
                            <div className=" m-2 flex flex-wrap">
                              <img src={frame2} className="mr-2" alt="Icon" />
                              61
                            </div>
                            <div className=" m-2 flex flex-wrap">
                              <img src={frame3} className="mr-2" alt="Icon" />
                              2.0k
                            </div>
                            <div className=" m-2 flex flex-wrap">
                              <img src={frame4} className="mr-2"  alt="Icon" />
                              308.6k
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <button className="arrow-left arrow  absolute -left-4 top-[40%] z-10 cursor-pointer md:left-0 lg:-left-4 lg:top-[50%] ">
                  <img src={left} alt="MCRT Token" className="cursor-pointer" />
                </button>
                <button className="arrow-right arrow absolute -right-4 top-[40%] z-10 cursor-pointer md:right-0 lg:-right-4 lg:top-[50%]  ">
                  <img
                    src={right}
                    alt="MCRT Token"
                    className="cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </section>

          <GamePlay />

          {/*JOIN THE ACTION */}
          <section className=" flex justify-center bg-center p-4 lg:mt-[3em] lg:h-full ">
            <div className="relative max-w-[80em]  rounded-4xl bg-[#0A0424] bg-opacity-70 ">
              <div className="space-y-5   px-8 pb-10 pt-5 md:px-10">
                <h5 className="mx-auto max-w-xl text-balance text-center font-serif text-base md:text-2xl">
                  JOIN THE ACTION, EARN MCRT
                </h5>
                <p className="text-center">
                  Jump into MagicCraft matches and compete to win MCRT. Showcase
                  your skills, claim your rewards,
                  <br className="hidden lg:block" /> and rise through the ranks.
                  Start your journey to gaming glory now!
                </p>
                <div className="grid grid-cols-1 gap-[30px]  md:grid-cols-2 lg:place-items-stretch  xl:grid-cols-3 ">
                  <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px ">
                    <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90%  ">
                      <div className="flex flex-row ">
                        <div>
                          <img
                            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173182/contact_ylmg83.webp"
                            style={{ width: '150px', height: '150px' }}
                            className="mt-1 p-4"
                            alt="Directory"
                          />
                        </div>

                        <div className="my-4 p-4 cursor-pointer" onClick={registerHandler}>
                          <h4 className="font-serif  text-lg md:text-[22px]">
                            <span className="text-[#8EFF49] ">REGISTER</span>
                            <br /> AN $MCRT <br /> ACCOUNT
                          </h4>
                        </div>
                      </div>
                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="group overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px transition-transform hover:scale-[1.02]">
                    <div className="relative h-full rounded-[20px] bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90%">
                      <h4 className="flex items-center justify-center px-7 pt-2 font-serif text-lg md:text-[22px]">
                        <span className="text-[#FFB649] lg:pl-6">
                          DOWNLOAD{' '}
                        </span>{' '}
                        <span className="ml-2"> THE GAME</span>
                      </h4>

                      <div className="mb-2 flex flex-row items-center justify-center  gap-2 md:mb-0">
                        <span
                          className="cursor-pointer md:px-3 lg:py-4  "
                          onClick={playonsteamHandler}
                        >
                          <img src={steam} className=" pb-4" alt="Steam Icon"></img>
                          Get it on
                          <br />
                          <p className="text-sm font-bold lg:text-lg">Steam</p>
                        </span>

                        <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />
                        <span
                          className="cursor-pointer px-3 lg:py-4 "
                          onClick={playonappleHandler}
                        >
                          <img src={AppleIcon} className=" pb-4" alt="Apple Icon"></img>
                          Get it on
                          <br />
                          <p className="text-sm font-bold lg:text-lg">
                            App store
                          </p>
                        </span>
                        <div className="block h-[5em] w-[2px] bg-gradient-to-t from-transparent via-[#9255E0] to-transparent " />
                        <span
                          className=" z-10  cursor-pointer px-3 lg:py-4 "
                          onClick={getfromgoogleHandler}
                        >
                          <img
                            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173081/logo_1_ulmoss.webp"
                            className=" pb-4"
                            alt="Google Play Icon"
                          ></img>
                          Get it on
                          <br />
                          <p className="text-sm font-bold lg:text-lg">
                            Google Play
                          </p>
                        </span>
                      </div>
                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                        2
                      </div>
                    </div>
                  </div>

                  <div className="group overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px transition-transform hover:scale-[1.02]">
                    <a href="https://lobby.magiccraft.io/" target="_blank" rel="noopener noreferrer">
                      <div className="relative h-full rounded-[20px] bg-gradient-to-r from-[#57186D] to-[#2A0D4E] to-90%">
                        <div className="flex items-start p-6">
                          <img
                            src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173149/Group_7072_cgsuti.webp"
                            className="mr-4 h-24 w-24 object-contain"
                            alt="Web3 lobby icon"
                          />
                          <div className="pt-2">
                            <h3 className="font-serif text-lg md:text-xl">
                              <span className="text-[#FF49ED]">JUMP</span> INTO
                              <br />A WEB3 <br />
                              LOBBY
                            </h3>
                          </div>
                        </div>
                        <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[230px]">
                          3
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*roadmap */}

          <section className="relative my-10 min-h-screen">
            <div className="absolute -top-40 left-0 right-0 -z-10 mx-auto aspect-square max-h-[700px] w-full max-w-[700px] rounded-full bg-[#1E025B] opacity-30 blur-[170px]" />

            <div className="space-y-20">
              <div className="space-y-8">
                <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl md:text-[54px] md:leading-[3.5rem]">
                  Roadmap
                </h2>
                <div className="mx-auto w-fit rounded-full bg-[#4457B84D] px-5 py-3 text-lg text-[#98FFF9] backdrop-blur">
                  2024
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <div className=" grid max-w-[100vw] snap-x  snap-mandatory auto-cols-auto grid-flow-col gap-8 overflow-x-scroll  px-4 lg:max-w-screen-xl  lg:overflow-x-hidden">
                  {roadmapData.map((data) => (
                    <RoadmapCard data={data} key={data.quarter} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/*roadmap */}

          {/*connect */}
          <section className="relative m-[10em] mx-auto flex w-11/12 max-w-screen-xl flex-wrap items-center justify-center space-y-10 md:space-y-20 lg:space-y-0  ">
            <div className=" relative rounded-2xl border-[2px] border-solid bg-opacity-70 bg-gradient-to-r from-[#173B52] to-[#557e91] to-80% p-4 lg:h-[280px] lg:w-5/12 ">
              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173208/blahbla_wvvyzg.webp"
                className="absolute -top-10 right-0     block h-[400px] rounded-lg object-cover  md:hidden "
                alt="blahbla"
              />

              <img
                src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1717173208/character_imeoab.webp"
                alt="character"
                className="  absolute  inset-0 -top-20  left-[200px] hidden rounded-lg  object-cover p-10 md:block  md:w-7/12 lg:w-[350px]  "
              />
              <div className=" p-4 text-left ">
                <h3 className=" mt-40 bg-gradient-to-b from-white to-white/75  bg-clip-text font-serif text-4xl text-transparent drop-shadow-xl md:mt-10 md:text-5xl  lg:mt-0 lg:text-3xl ">
                  <p>CONNECT,</p>
                  <p>COLLABORATE,</p>
                  <p>CONQUER</p>
                </h3>
                <div className="m-2 block  h-px w-5/12 bg-gradient-to-r from-transparent via-[#98FFF9] to-transparent " />
                <p className="p-2 text-[#98FFF9] font-serif font-bold md:text-2xl">join us!</p>
                <p className="block md:mt-40  lg:hidden ">
                  Step into a world where gamers thrive together! Join our
                  Discord and Telegram channels to connect with players
                  worldwide, share strategies, and receive exclusive updates and
                  support. Be part of a community that plays, earns, and grows
                  together.
                </p>
                <div
                  className=" block flex-row flex-wrap items-center lg:hidden"
                  onClick={discordmagiccraftHandler}
                >
                  <div className="flex flex-wrap  ">
                    <img src={pc} alt="PC Icon" className="m-4"></img>
                    <span className="mt-4 text-2xl ">
                      Join MagicCraft's
                      <br />
                      <p className="text-2xl font-bold"> Discord</p>
                    </span>
                  </div>
                  <div className="hidden h-10 w-px bg-gradient-to-r from-transparent via-[#556DE0] to-transparent md:block " />
                  <div
                    className="flex flex-wrap "
                    onClick={telegrammagiccrftHandler}
                  >
                    {/* <img src={AppleIcon} className=" m-4"></img> */}
                    <LiaTelegramPlane
                      style={{ width: '2em', height: '3em', margin: '10px' }}
                    />

                    <span className="mt-4 text-2xl ">
                      Join MagicCraft's
                      <br />
                      <p className="text-2xl font-bold"> Telegram</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" hidden w-5/12  rounded-2xl bg-[#08061C] bg-opacity-70 px-10 pt-10  lg:block">
              <p>
                Step into a world where gamers thrive together! Join our Discord
                and Telegram channels to connect with players worldwide, share
                strategies, and receive exclusive updates and support. Be part
                of a community that plays, earns, and grows together.
              </p>
              <div className="flex flex-wrap items-center">
                <img src={pc} alt="PC Icon"></img>
                <span
                  className=" cursor-pointer p-4"
                  onClick={discordmagiccraftHandler}
                >
                  Join MagicCraft's
                  <br />
                  <p className="text-2xl font-bold"> Discord</p>
                </span>

                <div className="mx-4 block h-[4em] w-[2px] bg-gradient-to-t from-transparent via-[#2F3A80] to-transparent " />
                {/* <img src={AppleIcon} className=" pl-4"></img> */}
                <LiaTelegramPlane style={{ width: '2em', height: '3em' }} />
                <span
                  className=" cursor-pointer p-4"
                  onClick={telegrammagiccrftHandler}
                >
                  Join MagicCraft's
                  <br />
                  <p className="text-2xl font-bold"> Telegram</p>
                </span>
              </div>
            </div>
          </section>
          {/**browser game  */}
          <section className="relative mx-auto mt-0 w-11/12 max-w-screen-xl space-y-10 mb-[50px] min-h-screen ">
            <h2 className="text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl  md:leading-[3.5rem]">
              FULL LAUNCH OF THE MAGICVERSE GAME
            </h2>
            <div className="relative  w-full rounded-4xl bg-[#080420]  ">
              <div className="space-y-5 px-8 pb-6 pt-5 md:px-10 ">
                <div className="grid grid-cols-1 place-items-stretch gap-[30px] md:grid-cols-2 lg:grid-cols-4">
                  <h5 className="mx-auto  text-balance text-center font-serif text-base md:mt-[2em] md:text-[16px]">
                    jOIN US IN SHAPING THE FUTURE
                    <br />
                    OF GAMING WITH MCRT, THE
                    <br />
                    CORNERSTONE CURRENCY OF <br />
                    THE GAMING WORLD.
                  </h5>
                  <div className="overflow-hidden rounded-[20px] bg-gradient-to-b from-[#B591F2] to-transparent p-px">
                    <div className="relative h-full w-full rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-4 py-2  ">
                      <h4 className="font-serif  text-lg md:text-[16px]">
                        <span className="text-[#8EFF49]">
                          MCRT INTEGRATION:
                        </span>{' '}
                        <br /> ENHANCE YOUR GAMING WITH MCRT.
                      </h4>

                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[190px]">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                    <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#2A0D4E] to-[#57186D] to-90% px-8 py-4 ">
                      <h4 className="font-serif text-lg md:text-[16px]">
                        <span className="text-[#C09AFF]">
                          MONTHLY SURPRISES:
                        </span>{' '}
                        <br />
                        NEW GAMES EVERY TWO MONTHS.
                      </h4>

                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[190px]">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[20px] bg-gradient-to-b from-[#B591F2]  to-transparent p-px">
                    <div className="relative h-full w-full overflow-hidden rounded-[20px]  bg-gradient-to-r from-[#3D186D] to-[#2A0D4E] to-90% px-8 py-4   ">
                      <h4 className="font-serif text-lg md:text-[16px]">
                        <span className="text-[#98FFF9]">PORTFOLIO:</span>{' '}
                        <br />
                        INDIE AND AA GAMES ONBOARDED.
                      </h4>

                      <div className="absolute -bottom-10 right-1 bg-gradient-to-b from-white/20 to-transparent bg-clip-text font-serif text-[170px] leading-none text-transparent md:text-[190px]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" rounded-4xl bg-custom-dark bg-opacity-70  px-10 py-5  ">
                <div className="text-center">
                  <h3 className=" font-serif text-2xl font-bold">
                   OTHER MAGICVERSE GAMES TO PLAY{' '}
                  </h3>
                </div>
                <div className="w-full">
              <div className="relative mx-auto w-full   max-w-screen-xl hidden lg:block">
              <div className=' '>
                <img
                  src="https://res.cloudinary.com/dfzcr2ch4/image/upload/v1733160952/image_14_meffcp.webp"
                  alt="Magiccraft banner showing a wizard character"
                  className="h-auto  mb-6 w-full object-cover"
                />
              </div>
                {/* Content overlay using flexbox */}
                <div className="absolute  inset-0 ml-4 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-[4rem]">
                  <div className="space-y-1 sm:space-y-2">
                    <h1 className="font-serif text-xs text-white sm:text-lg lg:text-xl">
                      MAGICCRAFT BROWSER GAMES
                    </h1>
                    <a href="https://games.magiccraft.io/" className="group inline-flex items-center gap-1 text-xs text-[#98FFF9] transition-colors hover:text-white sm:text-sm">
                      Read more
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
                <div className=" hidden grid-cols-5 gap-4  lg:grid lg:mx-10">
                  {filteredGames.map((game: Game) => (
                    <div key={game.id} className=" min-w-[160px] flex-1 ">
                      <GameCard game={game} />
                    </div>
                  ))}
                </div>
                <div className=" grid grid-cols-5 gap-4 overflow-x-auto md:grid-cols-2  lg:hidden lg:grid-cols-3 xl:grid-cols-5">
                  <div className="flex flex-nowrap">
                    {filteredGames.map((game: Game) => (
                      <div key={game.id} className="mx-4 min-w-[160px] flex-1 ">
                        <GameCard game={game} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </section>
          {/*our team */}
          <div className="h-auto bg-[#020418] p-10">
            <section className="relative mx-auto max-w-screen-xl space-y-10 p-4 md:space-y-20 min-h-screen">
              <h3 className="-mb-10 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text p-5 text-center font-serif text-4xl text-transparent drop-shadow-xl">
                Our team
              </h3>
              <div className="flex items-center justify-center">
                <Tabs type="team">
                  <Tab id="ALL" label="ALL" className="w-[80vw]">
                    <div className="w-[80vw] space-y-4 lg:w-[60vw]">
                      <div className="relative my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {ourteam.slice(0, visibleCount).map((item, index) => (
                          <React.Fragment key={item.name}>
                            <div className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80">
                              <img
                                className=" max:w-[12.5em] max:h-[12.5em]"
                                src={item.icon}
                                alt={item.name}
                              />
                              <p className="mt-2 text-white">{item.name}</p>
                              {item.work && (
                                <>
                                  <p className="mt-1 text-[#98FFF9]">
                                    {item.work}
                                  </p>
                                  <div className="mt-2 flex">
                                    {item.socialicons.map((social, idx) => (
                                      <a
                                        key={idx}
                                        href={social.socialmedia}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mx-2 bg-opacity-70 text-[#FFFFFF]"
                                      >
                                        {social.icons}
                                      </a>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                            {index <
                              ourteam.slice(0, visibleCount).length - 1 && (
                              <>
                                {(index + 1) % 2 === 0 && (
                                  <div className="divider absolute right-0 top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                                )}
                                <div className="divider absolute left-0 top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                                <div className="divider absolute left-[25%] top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                                <div className="divider absolute left-[50%] top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                                <div className="divider absolute left-[75%] top-0 hidden w-px bg-gradient-to-t from-transparent via-[#0D1233] to-transparent lg:block"></div>
                              </>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      {visibleCount < ourteam.length && (
                        <div className="mt-4 flex justify-center text-center">
                          <button
                            onClick={() => {
                              loadMore()
                              setTimeout(adjustDividerHeight, 0)
                            }}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur"
                          >
                            <img src={down} className="m-1" alt="Down arrow" />{' '}
                            Load More
                          </button>
                        </div>
                      )}
                    </div>
                  </Tab>

                  <Tab
                    id="Advisors and KOL's"
                    label="Advisors and KOL's"
                    className="w-[80vw]"
                  >
                    <div className="w-[80vw] space-y-4 lg:w-[60vw]">
                      <div className="relative my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {kolTeam.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80"
                          >
                            <img
                              className="max:w-[12.5em] max:h-[12.5em]"
                              src={item.icon}
                              alt={item.name}
                            />
                            <p className="mt-2 text-white">{item.name}</p>
                            {item.work && (
                              <>
                                <p className="mt-1 text-[#98FFF9]">
                                  {item.work}
                                </p>
                                <div className="mt-2 flex">
                                  {item.socialicons.map((social, idx) => (
                                    <a
                                      key={idx}
                                      href={social.socialmedia}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mx-2 text-[#FFFFFF]"
                                    >
                                      {social.icons}
                                    </a>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                      {visibleCount < kolTeam.length && (
                        <div className="mt-4 flex justify-center text-center">
                          <button
                            onClick={() => {
                              loadMore()
                            }}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur"
                          >
                            <img src={down} className="m-1" alt="Down arrow" />{' '}
                            Load More
                          </button>
                        </div>
                      )}
                    </div>
                  </Tab>

                  <Tab id="Team" label="Team" className="w-[80vw]">
                    <div className="w-[80vw] space-y-4 lg:w-[60vw]">
                      <div className="relative my-4 grid grid-cols-2 gap-12 md:grid-cols-4">
                        {teamMembers.slice(0, visibleCount).map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center bg-[#020418] text-center md:h-80"
                          >
                            <img
                              className="max:w-[12.5em] max:h-[12.5em]"
                              src={item.icon}
                              alt={item.name}
                            />
                            <p className="mt-2 text-white">{item.name}</p>
                            {item.work && (
                              <>
                                <p className="mt-1 text-[#98FFF9]">
                                  {item.work}
                                </p>
                                <div className="mt-2 flex">
                                  {item.socialicons.map((social, index) => (
                                    <a
                                      key={index}
                                      href={social.socialmedia}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="mx-2 text-[#FFFFFF]"
                                    >
                                      {social.icons}
                                    </a>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                      {visibleCount < teamMembers.length && (
                        <div className="mt-4 flex justify-center text-center">
                          <button
                            onClick={() => {
                              loadMore()
                            }}
                            className="flex flex-wrap rounded-full px-5 py-3 text-lg text-[#98FFF9] backdrop-blur"
                          >
                            <img src={down} className="m-1" alt="Down arrow" />{' '}
                            Load More
                          </button>
                        </div>
                      )}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </section>
          </div>
          {/*our team ended */}

          <section className="relative mx-auto w-11/12 max-w-screen-xl space-y-10 md:space-y-20 min-h-screen">
            <div className="space-y-8">
              <h3 className="mt-8 text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text pt-4 text-center font-serif text-4xl text-transparent drop-shadow-xl">
                $MCRT lISTED ON
              </h3>
              <div className="grid grid-cols-3 gap-5 md:grid-cols-4">
                {partners.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="grid h-20 place-items-center bg-[#161E4A]   md:h-36"
                    >
                      <img className="px-2 " src={item.icon} alt={item.name} />
                    </div>
                  )
                })}
              </div>

              <div className="block h-px w-full bg-gradient-to-r from-transparent via-[#9255E0] to-transparent " />
            </div>

            <div className="space-y-8">
              <h3 className="m-4  text-balance bg-gradient-to-b from-white to-white/75 bg-clip-text text-center font-serif text-4xl text-transparent drop-shadow-xl ">
                OUR PARTNERS
              </h3>
              <div className="grid grid-cols-3 gap-3 md:grid-cols-4">
                {otherpartners.map((item) => {
                  const link = item.link.includes('http')
                    ? item.link
                    : `https://${item.link}`
                  return (
                    <div
                      key={item.name}
                      className="flex h-[5em] flex-col items-center bg-[#080F44] md:h-36 md:justify-center"
                    >
                      <div className="flex items-center justify-center p-5 lg:mt-5">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="hidden lg:block">
                        <div className="  flex h-[3.5em] w-[19.4em] flex-col items-center  bg-[#0C1661] px-2  md:flex-row md:justify-between ">
                          <div className="text-center md:mr-[2em] md:flex md:flex-col md:items-start">
                            <div className="hidden   text-xs font-bold leading-tight text-[#fff] md:text-sm lg:block">
                              {item.name}
                            </div>
                            {item.link && (
                              <a
                                href={link}
                                className="hidden bg-gradient-to-b from-[#fff] to-[#808080] to-80% bg-clip-text text-[8.583px] font-bold leading-normal text-transparent underline md:text-xs lg:block"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.link}
                              </a>
                            )}
                          </div>
                          {item.type && (
                            <div className="mt-1 hidden text-xs text-[#7AF2B8] md:ml-[2em] md:mt-0 md:text-sm lg:block">
                              {item.type}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default Homepagemcrt
