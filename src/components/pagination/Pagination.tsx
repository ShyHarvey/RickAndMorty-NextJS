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
            <ul className="flex list-style-none">
                <li>
                    <Link href={prevPageLink} className={classNames({
                        "relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 ": true,
                        "pointer-events-none text-neutral-500": +currentPage === 1,
                        " text-white hover:bg-neutral-700": +currentPage !== 1
                    })}
                    >Previous</Link>
                </li>

                {pages.map((item, index) => <li key={index}>
                    <Link className={classNames({
                        "relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 text-white ": true,
                        //не понимаю почему, но цвет активной страницы постоянно ломается
                        "pointer-events-none bg-ram-300/40": +currentPage === item,
                        "hover:bg-neutral-700": +currentPage !== item
                    })}
                        href={nextPage.replace(/page=(\d+)/, `page=${item}`)}
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
                    >Next</Link>
                </li>
            </ul>
        </nav>
    )
}