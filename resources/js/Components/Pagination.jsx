export default function Pagination({ links }) {

    return (
        <nav className="mr-4 my-4">
            <ul className="inline-flex -space-x-px text-sm">
                {
                    links.map((link, index) =>
                        <li key={index}>
                            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                {link.label}
                            </a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}
