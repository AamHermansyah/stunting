import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaBedPulse } from 'react-icons/fa6'
import { RiCustomerService2Fill, RiTeamFill } from 'react-icons/ri'
import React from 'react'
import Facilities from "./Facilities"
import Services from "./Services"
import Experts from "./Experts"

function Description() {
  return (
    <Tabs defaultValue="facility" className="w-full">
      <div className="w-full overflow-x-auto custom-scrollbar-x">
        <TabsList>
          <TabsTrigger value="facility" className="gap-2">
            <FaBedPulse fontSize={20} />
            Fasilitas
          </TabsTrigger>
          <TabsTrigger value="service" className="gap-2">
            <RiCustomerService2Fill fontSize={20} />
            Pelayanan
          </TabsTrigger>
          <TabsTrigger value="expert" className="gap-2">
            <RiTeamFill fontSize={20} />
            Tenaga Ahli
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="facility">
        <Facilities />
      </TabsContent>
      <TabsContent value="service">
        <Services />
      </TabsContent>
      <TabsContent value="expert">
        <Experts />
      </TabsContent>
    </Tabs>
  )
}

export default Description