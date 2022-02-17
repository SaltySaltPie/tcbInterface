import { useState } from "react";
import styles from "./body.module.scss";
//260 words
function Body() {
  const data = [
    {
      year: 2012,
      title: "Title of event 12",
      image: "/images/data12.png",
      content:
        "awdawdwadwadawdawdaa awaw da wd a  daw a d aw dwa daw daw d awd aw daw daw dawd  awd d d aw dwdawdawdawdawdawdawdawddawVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum eu mauris vitae faucibus. Praesent vel metus sit amet arcu lobortis suscipit. Vivamus tristique arcu at arcu bibendum lacinia. Quisque in tempus ex, nec posuere eros. Morbi et mauris enim. Etiam laoreet est ac sapien fermentum pretium. Morbi eu neque placerat, interdum urna sed, vulputate elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum eu mauris vitae faucibus. Praesent vel metus sit amet arcu lobortis suscipit. Vivamus tristique arcu at arcu bibendum lacinia. Quisque in tempus ex, nec posuere eros. Morbi et mauris enim. Etiam laoreet est ac sapien fermentum pretium. Morbi eu neque placerat, interdum urna sed, vulputate elit.",
    },
    {
      year: 2013,
      title: "Title of event 13",
      image: "/images/data13.png",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum eu mauris vitae faucibus. Praesent vel metus sit amet arcu lobortis suscipit. Vivamus tristique arcu at arcu bibendum lacinia. Quisque in tempus ex, nec posuere eros. Morbi et mauris enim. Etiam laoreet est ac sapien fermentum pretium. Morbi eu neque placerat, interdum urna sed, vulputate elit.",
    },
    {
      year: 2014,
      title: "Title of event 14",
      image: "/images/data14.png",
      content:
        "Affirmed our status as the leader in service quality with 23 prestigious awards from domestic and foreign organizations such as Global Finance, IFC, and FinanceAsia.\n\nBecame the bank of choice of 3.7 million individual customers and 48,000 corporate customers.",
    },
    {
      year: 2015,
      title: "Title of event 15",
      image: "/images/data15.png",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum eu mauris vitae faucibus. Praesent vel metus sit amet arcu lobortis suscipit. Vivamus tristique arcu at arcu bibendum lacinia. Quisque in tempus ex, nec posuere eros. Morbi et mauris enim. Etiam laoreet est ac sapien fermentum pretium. Morbi eu neque placerat, interdum urna sed, vulputate elit.",
    },
    {
      year: 2016,
      title: "Title of event 16",
      image: "/images/data16.png",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla condimentum eu mauris vitae faucibus. Praesent vel metus sit amet arcu lobortis suscipit. Vivamus tristique arcu at arcu bibendum lacinia. Quisque in tempus ex, nec posuere eros. Morbi et mauris enim. Etiam laoreet est ac sapien fermentum pretium. Morbi eu neque placerat, interdum urna sed, vulputate elit.",
    },
  ];

  const [index, setIndex] = useState(2);
  const handleUp = () => {
    setIndex(index > 0 ? index - 1 : index);
  };
  const handleDown = () => {
    setIndex(index < data.length - 1 ? index + 1 : index);
  };
  const handleClick = (i: number) => {
    if (0 <= i && i < data.length) {
      setIndex(i);
    }
  };
  return (
    <section className={`${styles.contentC}`}>
      <div className={`${styles.cover1C}`}></div>
      <div className={`${styles.mainC}`}>
        <div className={`${styles.introTitle}`}>Our History and Milestones</div>
        <div className={`${styles.mainBlackC}`}>
          <div className={`${styles.sliderC}`}>
            <div className={`${styles.slider}`}>
              <div onClick={() => handleUp()}>
                <img src="/icons/upwhite.svg" alt="" />
              </div>
              <div onClick={() => handleClick(index - 2)}>
                {data[index - 2]?.year || ""}
              </div>
              <div onClick={() => handleClick(index - 1)}>
                {data[index - 1]?.year || ""}
              </div>
              <div className={`${styles.mainIndex}`}>{data[index].year}</div>
              <div onClick={() => handleClick(index + 1)}>
                {data[index + 1]?.year || ""}
              </div>
              <div onClick={() => handleClick(index + 2)}>
                {data[index + 2]?.year || ""}
              </div>
              <div onClick={() => handleDown()}>
                <img src="/icons/downwhite.svg" alt="" />
              </div>
            </div>
            <div className={`${styles.textC} `}>
              <div className={`${styles.title}`}>{data[index].title}</div>
              <div className={`${styles.content} `}>{data[index].content}</div>
            </div>
          </div>
          <div className={`${styles.placeholder}`}></div>
          <img
            src={data[index].image}
            alt=""
            className={`${styles.mainImage}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Body;
