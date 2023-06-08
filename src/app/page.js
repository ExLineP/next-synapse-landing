import Image from 'next/image'
import LogoComponent from './main/logoComponent'
import SidebarLayout from './main/SidebarLayout'
import MainComponent from './main/MainComponent'
export default function Home() {
  return (
    <div className='bg-[#201F1F]'>
    <SidebarLayout>
      <MainComponent/>
    </SidebarLayout>
    </div>
  )
}
