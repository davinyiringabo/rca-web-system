import Footer from "@/components/Footer/Footer"
import Hero from "@/components/Hero/Hero"
import Sidemenu from "@/components/Sidemenu/Sidemenu"

export default function AboutUsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Hero pageTitle={"Campus Life at RCA"} heroContent={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et Quasi architecto beatae vitae dicta sunt explicabo. Quis nostrud kemmith exercitation ullamco laboris nisi ut aliquip."}/>
        <div className="dynamic-content-container p-12 flex">
            <Sidemenu parent={"academics"} tabs={["Academic Year", "Accomodation", "Student Activities", "School Clubs", "Sports and Leisure", "Gallery and Videos", "Academic Affairs"]}/>
            {children}
        </div>
        
        <Footer/>
      </>
    )
  }