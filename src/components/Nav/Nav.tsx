import { useState } from "react";
import styles from "./nav.module.scss";
function Nav() {
  interface IOption {
    title: string;
    options: string[];
  }

  const titles: IOption[] = [
    {
      title: "individuals",
      options: ["option one", "option two", "option three", "option four"],
    },
    {
      title: "business",
      options: ["option one", "option two", "option three", "option four"],
    },
    {
      title: "priority",
      options: ["option one", "option two", "option three", "option four"],
    },
    {
      title: "",
      options: [],
    },
    {
      title: "for investor",
      options: ["option one", "option two", "option three", "option four"],
    },
    {
      title: "about",
      options: [
        "company information",
        "press & media",
        "legal and compliance",
        "corporate social responsibility",
      ],
    },
    {
      title: "careers",
      options: ["option one", "option two", "option three", "option four"],
    },
  ];

  const [selected, setSelected] = useState<number>(5);

  return (
    <nav className={`${styles.contentC}`}>
      <div className={`${styles.nav1C}`}>
        <ul className={`${styles.leftC}`}>
          {titles.map((title, index) => (
            <li
              key={index}
              className={`${title.title === "" ? styles.seperator : ""} ${
                selected === index ? styles.selected : ""
              }`}
              onClick={() => setSelected(index)}
            >
              {title.title}
            </li>
          ))}
        </ul>
        <ul className={`${styles.rightC}`}>
          <li>tools</li>
          <li>help & support</li>
          <li>contact us</li>
          <li className={`${styles.seperator}`}></li>
          <li className={`${styles.languageC}`}>
            <img src="/icons/globe.svg" alt="" />
            <span>English</span>
            <img src="/icons/arrowdown.svg" alt="" />
          </li>
        </ul>
      </div>
      <div className={`${styles.nav2C}`}>
        <ul className={`${styles.linksC}`}>
          {titles[selected].options.map((option, index) => (
            <li key={index}>
              <a href="/">{option}</a>
            </li>
          ))}
        </ul>
        <div className={`${styles.searchNLoginC}`}>
          <img src="/icons/search.svg" alt="" />
          <div className={`${styles.loginC}`}>
            login
            <img src="/icons/person.svg" alt="" />
          </div>
          <div className={`${styles.menuBtn}`}>
            <img src="/icons/menuBtn.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
