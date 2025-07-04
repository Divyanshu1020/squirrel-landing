import Image from 'next/image'

function HeroSection() {
  return (
    <div id="home" className='scroll-smooth relative h-[70vh] lg:h-[100vh] overflow-hidden'>
      <Image src="/images/hero-bg.png" alt="Hero" fill className='object-cover' />
      
      {/* Dark overlay for better text readability */}
      <div className='absolute inset-0 bg-black/20 z-5'></div>
      
      <div className='relative z-10 flex flex-col justify-center items-center min-h-[560px] h-[calc(70vh+60px)] lg:h-[110vh] px-4 text-center'>
        {/* Main Heading */}
        <h1 className='text-6xl md:text-8xl lg:text-9xl font-semibold primary-font text-white mb-8 '>
          We - Craft<br />
          Business
        </h1>
        
        {/* Subtitle */}
        <p className='text-lg md:text-2xl text-white/70 max-w-2xl mb-12 leading-6 secondary-font'>
        Building Digital Presence for Clients from 4 years with sheer honesty and hardwork.
        </p>
        
        {/* CTA Button */}
        <button className='group secondary-font flex items-center gap-3 bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm'>
          <span className='text-lg font-medium'>Get Started</span>
          <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
            <svg className='w-4 h-4 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </div>
        </button>
      </div>
      
      {/* Scrolling Text Banner at Bottom */}
      {/* <div className='absolute bottom-30 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm py-4 overflow-hidden'>
        <div className='animate-scroll whitespace-nowrap'>
          <span className='text-white/80 text-lg font-medium'>
            UI/UX • Web Apps • Mobile Apps • AI Solutions • Brand Identity • UI/UX • Web Apps • Mobile Apps • AI Solutions • Brand Identity • UI/UX • Web Apps • Mobile Apps • AI Solutions • Brand Identity • 
          </span>
        </div>
      </div> */}
      
    
    </div>
  )
}

export default HeroSection