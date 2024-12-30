"use client"

import React from "react";
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';


const HiOutlineEyeOff: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3657F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
  )
};

const HiOutlineEye: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3657F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
  )
};

const Login: React.FC = () => {

  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <>
            <div className="h-screen flex items-start justify-center bg-white sm:items-center">
                <div className="flex flex-wrap items-center justify-center">
                <div className="w-full xl:block xl:w-1/2">
                    <div className="px-26 text-center">
                    <Image
                        src={"/images/logo/logo-logic.png"}
                        alt="Logo principal Logic Solutions"
                        width={800}
                        height={800}
                    />
                    </div>
                </div>

                <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                    <div className="w-full p-4 sm:p-12.5 xl:p-17.5">

                    <span className="mb-1.5 block font-medium text-center text-black-2">
                        ¡Bienvenido nuevamente!
                    </span>
                    <h2 className="mb-9 text-2xl font-bold text-azul-oscuro text-center sm:text-title-xl2">
                        Iniciar sesión
                    </h2>

                    <form className="mx-4 sm:mx-0">
                        <div className="mb-4">
                        <label className="mb-2.5 block font-medium text-black-2">
                            Usuario:
                        </label>
                        <div className="relative">
                            <input
                            placeholder="Ingrese su correo"
                            className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            />

                            <span className="absolute right-4 top-4">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                            </span>
                        </div>
                        </div>

                        <div className="mb-6">
                        <label className="mb-2.5 block font-medium text-black-2">
                            Contraseña:
                        </label>
                        <div className="relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Ingrese su contraseña"
                            className="w-full rounded-lg border border-stroke bg-white py-4 pl-6 pr-12 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            />

                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-3"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                            </button>
                        </div>
                        </div>

                        <div className="mb-5">
                            <Link href="/home">
                                <button
                                    value="Ingresar"
                                    className="w-full cursor-pointer rounded-lg font-medium	 bg-azul-claro p-4 text-white transition hover:bg-blue-ray-aruba"
                                >
                                    Ingresar
                                </button>
                            </Link>
                        </div>

                        {/* <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                            <span>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_191_13499)">
                                <path
                                    d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                                    fill="#34A853"
                                />
                                <path
                                    d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                                    fill="#EB4335"
                                />
                                </g>
                                <defs>
                                <clipPath id="clip0_191_13499">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                                </defs>
                            </svg>
                            </span>
                            Sign in with Google
                        </button> */}

                        {/* <div className="mt-6 text-center">
                            <p>
                            Don’t have any account?{" "}
                            <Link href="/auth/signup" className="text-primary">
                                Sign Up
                            </Link>
                            </p>
                        </div> */}
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </>
  )
}

export default Login