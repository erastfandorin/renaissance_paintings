import { useState } from "react";

import Navigation from "./components/Navigation";
import Catalog from "./components/Catalog.js";
import Search from "./components/Search";
import Contact from "./components/Contact";
import MenuBurger from "./components/MenuBurger";

import TheBirthofVenus from "./assets/img/TheBirthofVenus.jpg";
import TheLastSupper from "./assets/img/TheLastSupper.jpg";
import TheCreationofAdam from "./assets/img/TheCreationofAdam.jpg";
import TheAnatomyLessonofDrTulp from "./assets/img/TheAnatomyLessonofDrTulp.jpg";

import generalStyles from "./styles/App.module.css";

function App() {
  const [paintings, setPaintings] = useState([
    {
      id: 1,
      imgName: "«Народження Венери»",
      authorName: "Сандро Боттічеллі",
      img: TheBirthofVenus,
      prise: 2000000,
      discount: 1000000,
      isAvailable: true,
      isInCard: true,
    },
    {
      id: 2,
      imgName: "Тайна вечеря",
      authorName: "Леонардо да Вінчі",
      img: TheLastSupper,
      prise: 3000000,
      discount: 0,
      isAvailable: true,
      isInCard: false,
    },
    {
      id: 3,
      imgName: "Створення Адама",
      authorName: "Мікеланджело",
      img: TheCreationofAdam,
      prise: 6000000,
      discount: 1000000,
      isAvailable: true,
      isInCard: false,
    },
    {
      id: 4,
      imgName: "Урок анатомії доктора Тюльпа",
      authorName: "Рембрандт",
      img: TheAnatomyLessonofDrTulp,
      prise: 6000000,
      discount: 0,
      isAvailable: false,
      isInCard: false,
    },
  ]);

  return (
    <div className={generalStyles.app}>
      <header className={generalStyles.app__header}>
        <Navigation>
          <Search />
          <MenuBurger />
        </Navigation>
      </header>
      <main className={generalStyles.cont}>
        <h1 className={generalStyles.app__headline}>
          Картини епохи Відродження
        </h1>
        <Catalog paintings={paintings} setPaintings={setPaintings} />
      </main>
      <footer>
        <Navigation>
          <Contact />
        </Navigation>
      </footer>
    </div>
  );
}

export default App;
