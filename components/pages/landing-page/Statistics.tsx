import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const data = [
  {
    percentColor: 'text-red-500',
    percent: '40%',
    title: 'Terkena Stunting',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, animi tenetur quidem maiores unde facere aliquid maxime doloremque saepe quibusdam eaque earum perspiciatis! Eligendi autem, neque repudiandae minus dolorem consequatur.',
  },
  {
    percentColor: 'text-primary',
    percent: '30%',
    title: 'Sehat & Bebas dari Stunting',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, animi tenetur quidem maiores unde facere aliquid maxime doloremque saepe quibusdam eaque earum perspiciatis! Eligendi autem, neque repudiandae minus dolorem consequatur.',
  },
  {
    percentColor: 'text-gray-400',
    percent: '30%',
    title: 'Belum Terdata',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, animi tenetur quidem maiores unde facere aliquid maxime doloremque saepe quibusdam eaque earum perspiciatis! Eligendi autem, neque repudiandae minus dolorem consequatur.',
  },
]

const Statistics = () => {
  return (
    <section id="statistics" className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
        {data.map((item, index) => (
          <Card key={index} className="pt-4">
            <CardContent>
              <h1 className={cn('text-4xl font-bold', item.percentColor)}>
                {item.percent}
              </h1>
              <h4 className="my-1 text-lg font-semibold">
                {item.title}
              </h4>
              <CardDescription>
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Statistics