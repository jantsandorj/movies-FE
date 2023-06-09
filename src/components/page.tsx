import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export const Pagination = ({
  totalRows,
  pageSize,
}: {
  totalRows: number;
  pageSize: number;
}) => {
  interface INumber {
    lastQuery: number;
  }
  const page = Math.floor(totalRows / 30);
  const pageData = new Array(20);
  console.log(pageData);
  
  const router = useRouter();
  const lastQuery:{} = router.query;
  const queryVal = Object.values(lastQuery)[0] 

  

  const activeClass = {
    active:
      "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    other:
      "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden md:items-center sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link
              href={{
                pathname: "/movies",
                query: {
                  pageSize: Number(queryVal) - 1,
                },
              }}
              aria-current="page"
              className={
                pageSize == Number(queryVal) - 1
                  ? activeClass.active
                  : activeClass.other
              }
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>

            {pageData.map((e, i) => {
              return (
                <Link
                  key={i}
                  href={{
                    pathname: "/movies",
                    query: {
                      pageSize: i + 1,
                    },
                  }}
                  aria-current="page"
                  className={
                    pageSize == i + 1 ? activeClass.active : activeClass.other
                  }
                >
                  {i + 1}
                </Link>
              );
            })}

            <Link
              href={{
                pathname: "/movies",
                query: {
                  pageSize: Number(queryVal) + 1,
                },
              }}
              aria-current="page"
              className={
                pageSize == Number(queryVal) + 1
                  ? activeClass.active
                  : activeClass.other
              }
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
