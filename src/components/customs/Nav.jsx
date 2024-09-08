import React, { useContext } from 'react'
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils"
import { ListItem } from '@/components/customs/ListItem'
import { ShimmerButton } from './ShimmerButton'
// import { departments } from '@/data/departements'
import ShinyButton from '../magicui/shiny-button'
import { Context } from '@/context/Context'

function Nav() {
  // const components = [
  //   {
  //     title: "General",
  //     description:
  //       "A modal dialog that interrupts the user with important content and expects a response.",
  //   },
  //   {
  //     title: "Blood",
  //     description:
  //       "For sighted users to preview content available behind a link.",
  //   },
  //   {
  //     title: "Surgery",
  //     description:
  //       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  //   },
  //   {
  //     title: "Pediatrics",
  //     description: "Visually or semantically separates content.",
  //   },
  //   {
  //     title: "Cardiology",
  //     description:
  //       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   },
  //   {
  //     title: "Oncology",
  //     description:
  //       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   },
  //   {
  //     title: "Neurology",
  //     description:
  //       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   },
  //   {
  //     title: "Orthopedics",
  //     description:
  //       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   },
  //   {
  //     title: "Radiology",
  //     description:
  //       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   },
  //   {
  //     title: "Dermatology",
  //     description:
  //       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   },
  //   {
  //     title: "Gynecology",
  //     description:
  //       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  //   },
  // ]
  const { allDepartements } = useContext(Context);


  return (
    <>
      <NavigationMenu className='z-30'>
        <NavigationMenuList className='z-30'>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">Hospital</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      to="/"
                    >
                      <div className="nav-content">
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Hospital
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem  to="/hospital/gallery" title="Gallery">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem to="/hospital/events" title="Events">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem to="/hospital/blog" title="Blog">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Components */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">Departments</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {allDepartements.map((component) => (
                  <ListItem
                    className={"z-50"}
                    key={component.departmentName}
                    title={component.departmentName}
                    to={`/departments/${component.departmentName}/info`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* About US */}
          <NavigationMenuItem>
            <NavigationMenuLink className="bg-transparent" asChild>
              <Link className={navigationMenuTriggerStyle()} to="/about-us">
                About us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink className="bg-transparent" asChild>
              <Link to="/beds">
                <ShinyButton text='Bed Availability' />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

export default Nav