import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import SpeedCard from '@/Components/SpeedCard';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen h-full m-0 flex flex-row bg-sky-50">
            <nav className="border-b h-full flex flex-col min-h-screen w-1/5 border-gray-100 bg-white">
                <div className="mx-auto flex grow px-4 sm:px-6 lg:px-8">
                    <div className="flex mt-5 h-full flex-col justify-between">
                        <div className="flex flex-col">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            {/* {header && (
                                <header className="m-4 flex items-center ">
                                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                                        {header}
                                    </div>
                                </header>
                            )} */}
                            {/* <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>
                            </div> */}
                        </div>

                        {/* <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative left-1000 ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                {user.name}

                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div> */}
                          <SpeedCard>
                            <div className='m-4 font-bold' >Average Speed (Km/h)</div>
                            <div className='p-3 flex justify-center'>
                            <ReactSpeedometer 
                                width={230}
                                height={230}
                              minValue={100}
                              maxValue={500}
                              value={473}
                            startColor='#009EFD' endColor='#2AF598'></ReactSpeedometer>

                            </div>
                          </SpeedCard>
                          <SpeedCard>
                            <div className='m-4 font-bold' >Maximum Speed (Km/h)</div>
                            <div className='p-3 flex justify-center'>
                            <ReactSpeedometer 
                             width={230}
                             height={230}
                              minValue={100}
                              maxValue={500}
                              value={473}
                            startColor='#009EFD' endColor='#2AF598'></ReactSpeedometer>

                            </div>
                          </SpeedCard>
                          <SpeedCard>
                          <div className='m-4 font-bold' >No of risky head movements</div>

                            <div className='w-full flex justify-center items-center h-3/4'>
                                <div className="w-36 m-2 h-36 flex items-center justify-center mb-8" style={{background: 'linear-gradient(45deg, #009EFD, #2AF598)', borderRadius: '50%'}} >
                                    <div className="w-32  h-32 flex items-center justify-center bg-white" style={{ borderRadius: '50%'}} >
                                    <div className='m-4 text-4xl font-bold' >5</div>
                                    </div>
                                </div>
                            </div>
                           
                          </SpeedCard>
                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                  
                </div>
                <div className='flex my-3 hover:cursor-pointer hover:underline opacity-50 justify-center h-1/12'>
                        Logout
                    </div>
                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden'
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

      

            <main>{children}</main>
        </div>
    );
}
