"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import UsersList from "@/components/Users/UsersList";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const UsersPage = () => {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-between">
        <Breadcrumb pageName="Reportes" />

        <button>
            <a
            href="/users/addUserInternal"
            className="mb-3 inline-flex items-center justify-center gap-2.5 rounded-lg bg-azul-claro px-7 py-4 text-center font-medium text-white transition-colors duration-300 hover:bg-azul-oscuro lg:px-8 xl:px-10"
            >
            <span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                <path d="M15 12h-6" />
                <path d="M12 9v6" />
                </svg>
            </span>
            Nuevo Reporte
            </a>
        </button>
      </div>

      <p className=" py-10 text-center text-xl font-bold text-black-2">
        ESTÁMOS TRABAJANDO EN ESTA SECCIÓN
      </p>

      <div className="flex flex-col gap-10">
        <UsersList />
      </div>
    </DefaultLayout>
  );
};

export default UsersPage;
