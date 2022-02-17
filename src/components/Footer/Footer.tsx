import styles from "./footer.module.scss";
function Footer() {
  return (
    <section className={`${styles.contentC}`}>
      <div className={`${styles.infoC}`}>
        <div>
          Addtional Links <img src="/icons/downred.svg" alt="" />
        </div>
        <img
          src="/icons/techcombank.png"
          alt=""
          className={`${styles.techcombank}`}
        />
        <div className={`${styles.iconsC}`}>
          <div>Stay connected with Techcombank</div>
          <div>
            <img src="/icons/facebook.svg" alt="" />
            <img src="/icons/linkedin.svg" alt="" />
            <img src="/icons/youtube.svg" alt="" />
          </div>
        </div>
      </div>
      <ul className={`${styles.bottom} `}>
        <li>Copyright © TechcomBank All rights reserved.</li>
        <li>Terms & Conditions</li>
        <li>Privacy & Policy</li>
      </ul>
    </section>
  );
}

export default Footer;
