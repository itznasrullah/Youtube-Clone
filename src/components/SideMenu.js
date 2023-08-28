import './SideMenu.css'
import SideMenuElement  from "./SideMenuElement";

const SideMenu = () => {
  return (
    <div className="Side-Menu">
        <SideMenuElement name='Home' />
        <SideMenuElement name='Shorts' />
        <SideMenuElement name='Subscriptions' />
        {/* <SideMenuElement name='Shorts' />
        <SideMenuElement name='Shorts' />
        <SideMenuElement name='Shorts' />
        <SideMenuElement name='Shorts' />
        <SideMenuElement name='Shorts' />
        <SideMenuElement name='Shorts' /> */}

    </div>
  )
}

export default SideMenu