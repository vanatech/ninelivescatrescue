/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Typography,
    // Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";


//   render() {
//     return (
//         <div className="navbar">
//             <div className="flex-1">
//                 <Link className="btn btn-ghost text-xl" tag={Link} to="/">9 Lives Cat Rescue</Link>
//             </div>
//             <div className="flex-none">
//                 <ul className="menu menu-horizontal px-1">
//                     <li>
//                         <details>
//                             <summary>
//                                 Adopt/Foster
//                             </summary>
//                             <ul className="p-2 bg-primary rounded-t-none">
//                                 <li><a>Available Cats</a></li>
//                                 <li><a>Adoption Application</a></li>
//                                 <li><a>Foster Application</a></li>
//                             </ul>
//                         </details>
//                     </li>
//                     <li><a>Spay/Neuter</a></li>
//                     <li><a>About Us</a></li>
//                     <li><Link tag={Link} to="/contact">Contact</Link></li>
//                 </ul>
//             </div>
//         </div>
//     );
//   }
// }

const navListMenuItems = [
    {
        title: "Available Cats",
        path: "available-cats"
    },
    {
        title: "Adoption Application",
        path: "adoption-application"
    },
    {
        title: "Foster Application",
        path: "foster-application"
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ title, path}, key) => (
            <Link to={path} key={key}>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {title}
                        </Typography>
                    </div>
                </MenuItem>
            </Link>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            Adopt/Foster
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${
                                    isMobileMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="flex flex-col gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="/"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                href="spay-neuter"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Spay/Neuter
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="about"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    About
                </ListItem>
            </Typography>
            <Typography
                as="a"
                href="contact"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Contact
                </ListItem>
            </Typography>
        </List>
    );
}

export function NavMenu() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
        
    return (
        <Navbar fullWidth className="px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    9 Lives Cat Rescue
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                {/*<div className="hidden gap-2 lg:flex">*/}
                {/*    <Button variant="text" size="sm" color="blue-gray">*/}
                {/*        Log In*/}
                {/*    </Button>*/}
                {/*    <Button variant="gradient" size="sm">*/}
                {/*        Sign In*/}
                {/*    </Button>*/}
                {/*</div>*/}
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    {/*<Button variant="outlined" size="sm" color="blue-gray" fullWidth>*/}
                    {/*    Log In*/}
                    {/*</Button>*/}
                    {/*<Button variant="gradient" size="sm" fullWidth>*/}
                    {/*    Sign In*/}
                    {/*</Button>*/}
                </div>
            </Collapse>
        </Navbar>
    );
}
