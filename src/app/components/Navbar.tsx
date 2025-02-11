import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { RiContractRightLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    return (
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link href='/' className='flex z-40 font-semibold'>
                        case <span className='text-green-600'>cobra</span>
                    </Link>
                    <div className='h-full flex items-center space-x-4'>
                        {user ? (
                            <>
                                <Link href='/api/auth/logout' className={buttonVariants({
                                    size: 'sm', variant: "ghost"
                                })}>
                                    Sign Out
                                </Link>
                                {isAdmin ? (
                                    <Link href='/api/auth/logout' className={buttonVariants({
                                        size: 'sm', variant: "ghost"
                                    })}>
                                        Dashboard
                                    </Link>
                                ) : null}
                                <Link href='/configure/upload' className={buttonVariants({
                                    size: 'sm',
                                    className: "hidden sm:flex items-center gap-1 "
                                })}>
                                    Create Case
                                    <FaArrowRight />

                                </Link>
                            </>
                        ) :
                            (
                                <>
                                    <Link href='/api/auth/register' className={buttonVariants({
                                        size: 'sm', variant: "ghost"
                                    })}>
                                        Sign Up
                                    </Link>
                                    <Link href='/api/auth/login' className={buttonVariants({
                                        size: 'sm', variant: "ghost"
                                    })}>
                                        Login
                                        <RiContractRightLine />
                                    </Link>
                                    <Link href='/configure/upload' className={buttonVariants({
                                        size: 'sm',
                                        className: "hidden sm:flex items-center gap-1 "
                                    })}>
                                        Create Case
                                        <FaArrowRight />
                                    </Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;