import ExpertiseCard from '../ui/ExpertiseCard'
import services from '../../data/serviceData'

export default function Services() {
  
  return (
    <div>
        <div>
          <div><h3 className='text-4xl'>Tailored Solutions to</h3></div>
          <div><h3>Grow Your Business</h3></div>
          <p>I offer tailored design and development solutions that empower businesses to reach new heights. From ideation to development, I’m here to support your business goals.</p>
          <p>Here’s how I can help.</p>
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
    </div>
  )
}