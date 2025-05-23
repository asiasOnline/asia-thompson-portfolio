import ExpertiseCard from '../ui/ExpertiseCard'
import services from '../../data/serviceData'
import HeroAvatar from '../ui/HeroAvatar'
import { Button } from '../ui/Button'

export default function Services() {
  
  return (
    <div>
        <div className='w-full flex gap-10 justify-center'>
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
            <p className='text-lg'>I offer tailored design and development solutions that empower businesses to reach new heights. From ideation to development, I’m here to support your business goals.</p>
            <p className='my-8 text-lg'>Here’s how I can help.</p>
        </div>
        </div>
        <div className='grid grid-cols-3 gap-10 mx-20'>
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
      <div className='flex flex-col gap-4 my-14'>
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
  )
}