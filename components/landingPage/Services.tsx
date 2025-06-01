import ExpertiseCard from '../ui/ExpertiseCard'
import services from '../../data/serviceData'
import HeroAvatar from '../ui/HeroAvatar'
import { Button } from '../ui/Button'
import HorizontalScrollCarousel from '../ui/HorizontalScrollCarousel'

export default function Services() {
  
  return (
    <div>
      {/* Service Header */}
        <div id="seviceHeader" className='w-full flex gap-16 justify-center'>
          <div className='max-w-40'>
            <HeroAvatar />
          </div>
          <div className='w-1/3'>
            <div className='flex flex-col justify-center'>
              <div>
              <h3 className='text-6xl text-center'>Tailored Solutions to</h3>
            </div>
            <div>
              <h3 className="relative inline-block text-4xl sm:text-6xl md:text-7xl lg:text-6xl 2xl:text-6xl text-nowrap font-display font-bold tracking-widest mt-2 mb-6">
            {/* Stroke Layer (behind) */}
            <span className="absolute inset-0 text-stroke dark:text-stroke-white z-0">
              Grow Your Business
            </span>

            {/* Shadow Layer (middle) */}
            <span className="absolute inset-0 z-10 text-white dark:text-black text-shadow-md">
              Grow Your Business
            </span>

            {/* Fill Layer (on top) */}
            <span className="relative z-20 text-white">
              Grow Your Business
            </span>
          </h3>
            </div>
            </div>
            <div className='flex flex-col gap-4'>
        <div className='text-lg text-center'>
          <p>Not sure if what you need is covered with what I offer? No worries! </p>
          <p>Let’s get it sorted out!</p>
        </div>
        <div className='flex justify-center'>
          <Button 
          variant="default" 
          type="submit" 
          className="text-lg min-w-60 gap-4 font-bold tracking-wide px-5 py-7 border-2 border-ultramarine button-shadow-primary hover:shadow-none dark:bg-brightPurple"  
          >Let's Chat
        </Button>
        </div>
      </div>
        </div>
        </div>
        {/* Main Service Section */}
        <section className='w-full h-auto flex content-center'>
        {/* Service Cards */}
        <HorizontalScrollCarousel>
          <div id="serviceCards" className='flex gap-32'>
          {
            services.map((card: any) => (
                <ExpertiseCard 
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    tools={card.tools}
                />
            ))
        }
      </div>
        </HorizontalScrollCarousel>
        </section>
      {/* Service CTA */}
      
    </div>
  )
}