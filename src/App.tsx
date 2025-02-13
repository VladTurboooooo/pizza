import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog/Catalog';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import styles from './App.module.css';
import logo from './images/FINAL-1.svg';
import PizzaDetails from './components/Catalog/PizzaDetails/PizzaDetails';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
        <div className={styles.main_container}>
          <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="FINAL-1.svg" />
            <nav className={styles.nav}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                  <Link to="/">Главная</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link to="/reviews">Отзывы</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link to="/contact">Расположение</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.basket_container}>
              <Link className={styles.basket} to="/cart"><svg className={styles.basket_img} version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M108 5100 c-43 -23 -78 -82 -78 -130 0 -50 35 -107 80 -130 34 -18
59 -20 201 -20 l163 0 47 -49 c29 -30 55 -70 69 -107 17 -46 69 -411 241
-1699 120 -902 224 -1662 230 -1690 20 -90 76 -191 146 -265 98 -104 161 -142
330 -195 1 -1 -10 -30 -24 -65 -21 -53 -27 -86 -31 -175 -4 -99 -2 -118 22
-188 52 -156 155 -271 297 -336 119 -54 236 -64 363 -31 103 26 177 69 256
149 147 149 197 371 127 564 l-25 67 390 0 c368 0 390 -1 383 -18 -80 -187
-63 -377 46 -542 96 -143 279 -240 454 -240 137 0 288 63 386 161 166 166 209
398 115 621 -7 15 11 17 212 20 204 3 223 5 248 24 92 68 96 184 10 249 -27
20 -39 20 -1604 25 l-1577 5 -58 29 c-66 34 -131 99 -157 159 -16 38 -50 235
-50 294 l0 23 1518 0 c1682 0 1566 -5 1711 67 144 70 276 233 316 389 18 74
235 1696 235 1761 -1 207 -140 397 -343 467 l-62 21 -1871 3 -1871 2 -17 138
c-36 284 -81 398 -210 528 -118 118 -146 127 -391 131 -175 3 -193 1 -227 -17z
m2076 -1132 c6 -56 56 -802 56 -837 0 -21 -1 -21 -560 -21 -440 0 -562 3 -565
13 -6 18 -115 841 -115 871 l0 26 589 0 590 0 5 -52z m1259 45 c2 -5 -9 -190
-24 -413 -15 -223 -28 -424 -29 -447 l0 -43 -425 0 -425 0 0 38 c-1 20 -14
222 -29 447 -16 226 -26 413 -24 418 2 4 217 7 478 7 261 0 476 -3 478 -7z
m1212 -4 c83 -23 144 -99 145 -179 0 -19 -20 -185 -45 -369 -25 -184 -45 -338
-45 -343 0 -4 -229 -8 -510 -8 l-510 0 0 23 c0 39 50 800 56 845 l5 42 432 0
c281 0 446 -4 472 -11z m-2391 -1241 c5 -42 56 -805 56 -840 0 -17 -32 -18
-523 -18 l-523 0 -57 438 c-32 240 -58 443 -57 450 0 9 117 12 549 12 l550 0
5 -42z m1100 0 c-7 -73 -54 -794 -54 -827 l0 -31 -345 0 -345 0 0 26 c0 33
-48 764 -54 827 l-5 47 403 0 404 0 -4 -42z m1301 15 c-3 -16 -23 -165 -45
-333 -36 -275 -43 -311 -71 -367 -35 -72 -93 -125 -169 -154 -46 -17 -79 -19
-410 -19 l-360 0 0 23 c0 42 51 812 56 845 l5 32 499 0 500 0 -5 -27z m-2529
-2007 c189 -88 188 -358 -2 -452 -56 -27 -165 -26 -220 4 -53 27 -107 90 -122
141 -17 54 -15 135 3 179 21 49 80 110 130 133 58 27 147 25 211 -5z m1790
-11 c58 -36 108 -113 119 -180 14 -97 -46 -209 -139 -258 -57 -30 -165 -30
-222 0 -184 97 -185 355 -2 448 46 23 63 26 124 23 58 -3 80 -9 120 -33z"/>
                </g>
              </svg>
                Корзина</Link>
            </div>

          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog/:pizzaId" element={<PizzaDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <ul className={styles.number_phonelist}>
            <li className={styles.number_phoneitem}><p>(11) 5589 - 3642</p></li>
            <li className={styles.number_phoneitem}><p>(11) 5589 - 0797</p></li>
            <li className={styles.number_phoneitem}><p>(11) 5583 - 3929</p></li>
          </ul>
        </div>
      </footer>
    </Router>
  );
}

export default App;