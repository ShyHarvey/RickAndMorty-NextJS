import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'


export const Pagination = ({ totalPage, currentPage, nextPage }: {
    totalPage: number,
    currentPage: string,
    nextPage: string,
}) => {


    let prevPageLink = nextPage
    prevPageLink = prevPageLink.replace(/page=(\d+)/, `page=${Number(currentPage) - 1}`);

    let pages: number[] = []

    if (totalPage > 10) {
        if (+currentPage > 5) {
            for (let i = +currentPage - 4; i <= +currentPage + 5; i++) {
                pages.push(i)
                if (i == totalPage) break
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i == totalPage) break
            }
        }
    } else {
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i)
        }
    }


    return (
        <nav className='m-5' aria-label="Page navigation example">
            <ul className="flex flex-wrap items-center justify-center list-style-none">
                <li>
                    <Link href={prevPageLink} scroll={false} className={classNames({
                        "relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 ": true,
                        "pointer-events-none text-neutral-500": +currentPage === 1,
                        " text-white hover:bg-neutral-700": +currentPage !== 1
                    })}
                    >Previous</Link>
                </li>

                {pages.map((item, index) => <li key={index}
                    className={
                        `relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 
                        ${+currentPage === item && "pointer-events-none bg-white text-ram-950"}
                        ${+currentPage !== item && "hover:bg-neutral-700 text-white"}`
                    }
                >
                    <Link
                        href={nextPage.replace(/page=(\d+)/, `page=${item}`)}
                        scroll={false}
                    >{item}</Link>
                </li>
                )}

                <li>
                    <Link
                        className={classNames({
                            "relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 ": true,
                            "pointer-events-none text-neutral-500": +currentPage === totalPage,
                            "text-white hover:bg-neutral-700": +currentPage < totalPage
                        })}
                        href={nextPage}
                        scroll={false}
                    >Next</Link>
                </li>
            </ul>
        </nav >
    )
}