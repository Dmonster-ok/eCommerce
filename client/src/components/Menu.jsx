import { Link } from 'react-router-dom';

const Menu = () => {

    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">

            <div className="offcanvas-header justify-content-between align-items-center">
                <h4 className="offcanvas-title">Menu</h4>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">

                <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                    <li className="nav-item border-dashed active">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#fruits"></use></svg>
                            <span>Fruits and vegetables</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#dairy"></use></svg>
                            <span>Dairy and Eggs</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#meat"></use></svg>
                            <span>Meat and Poultry</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#seafood"></use></svg>
                            <span>Seafood</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#bakery"></use></svg>
                            <span>Bakery and Bread</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#canned"></use></svg>
                            <span>Canned Goods</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#frozen"></use></svg>
                            <span>Frozen Foods</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#pasta"></use></svg>
                            <span>Pasta and Rice</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#breakfast"></use></svg>
                            <span>Breakfast Foods</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#snacks"></use></svg>
                            <span>Snacks and Chips</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <button className="btn btn-toggle dropdown-toggle position-relative w-100 d-flex justify-content-between align-items-center text-dark p-2" data-bs-toggle="collapse" data-bs-target="#beverages-collapse" aria-expanded="false">
                            <div className="d-flex gap-3">
                                <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#beverages"></use></svg>
                                <span>Beverages</span>
                            </div>
                        </button>
                        <div className="collapse" id="beverages-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal ps-5 pb-1">
                                <li className="border-bottom py-2"><Link to="/" className="dropdown-item">Water</Link></li>
                                <li className="border-bottom py-2"><Link to="/" className="dropdown-item">Juice</Link></li>
                                <li className="border-bottom py-2"><Link to="/" className="dropdown-item">Soda</Link></li>
                                <li className="border-bottom py-2"><Link to="/" className="dropdown-item">Tea</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#spices"></use></svg>
                            <span>Spices and Seasonings</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#baby"></use></svg>
                            <span>Baby Food and Formula</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#health"></use></svg>
                            <span>Health and Wellness</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#household"></use></svg>
                            <span>Household Supplies</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#personal"></use></svg>
                            <span>Personal Care</span>
                        </Link>
                    </li>
                    <li className="nav-item border-dashed">
                        <Link to="/" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#pet"></use></svg>
                            <span>Pet Food and Supplies</span>
                        </Link>
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default Menu;