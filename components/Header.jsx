import Link from "next/link";
const Header = () => {
    return (
        <div className="navbar bg-base-100 px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                </div>
                <Link href="/" className="btn btn-ghost text-3xl">
                    ApnaSarthi
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul
                    tabIndex={0}
                    className="menu menu-horizontal px-1 text-base"
                >
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">about</Link>
                    </li>
                    <li>
                        <Link href="/review">review</Link>
                    </li>
                    <li>
                        <Link href="/support">Support</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-3 ">
                <Link href="/login" className="btn btn-outline">
                    Log in
                </Link>
                <Link href="/Sign up" className="btn btn-primary">
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default Header;
