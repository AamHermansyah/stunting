'use client';

import { Timeline } from 'flowbite-react';
import CalendarIcon from './CalendarIcon';

const data = [
  {
    year: '2018',
    title: 'Data Perkembangan Stunting',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus asperiores eum quis consequatur, adipisci at sapiente dolore aperiam dolorum, fugiat excepturi, distinctio pariatur iste dolor.'
  },
  {
    year: '2019',
    title: 'Data Perkembangan Stunting',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus asperiores eum quis consequatur, adipisci at sapiente dolore aperiam dolorum, fugiat excepturi, distinctio pariatur iste dolor.'
  },
  {
    year: '2020',
    title: 'Data Perkembangan Stunting',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus asperiores eum quis consequatur, adipisci at sapiente dolore aperiam dolorum, fugiat excepturi, distinctio pariatur iste dolor.'
  },
  {
    year: '2021',
    title: 'Data Perkembangan Stunting',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus asperiores eum quis consequatur, adipisci at sapiente dolore aperiam dolorum, fugiat excepturi, distinctio pariatur iste dolor.'
  },
]

const VerticalTimeline = () => {
  return (
    <section id="timeline" className="mt-10">
      <div className="w-full md:grid grid-cols-2 px-0 lg:px-10 py-10">
        <div className="flex items-center mb-10 md:mb-0">
          <h1 className="text-2xl sm:text-4xl uppercase tracking-widest font-semibold text-right sm:leading-[50px]">
            Data Stunting Se-Tasikmalaya
          </h1>
        </div>
        <div className="max-h-[450px] overflow-y-auto pl-4 md:pl-10 pr-2 custom-scrollbar">
          <Timeline>
            {data.map((item, index) => (
              <Timeline.Item key={index}>
                <Timeline.Point icon={CalendarIcon} />
                <Timeline.Content>
                  <Timeline.Time>
                    {item.year}
                  </Timeline.Time>
                  <Timeline.Title>
                    {item.title}
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>
                      {item.description}
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}

export default VerticalTimeline