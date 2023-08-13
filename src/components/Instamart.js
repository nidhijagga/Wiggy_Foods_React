import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-3 m-3">
      <h1 className="text-lg font-bold">{title}</h1>
      {isVisible ? (
        <button
          className="underline cursor-pointer"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="underline cursor-pointer"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout: false,
  //   showDetails: false,
  //   showTeam: false,
  //   showCareer: false,
  // });

  const [sectionVisible, isSectionVisible] = useState("");
  return (
    <div>
      <h1 className="text-4xl p-3 m-3 font-bold">InstaMart</h1>

      <Section
        title=" About InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore sapiente est veniam officia culpa facilis temporibus enim similique, esse quia labore saepe quos exercitationem dolorum cupiditate unde voluptas sequi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis iusto assumenda, nihil ducimus modi excepturi, laborum non voluptatem harum quas cum dolorum perferendis maiores officia? Autem soluta quisquam ipsam?"
        isVisible={sectionVisible === "about"}
        setIsVisible={() => isSectionVisible(sectionVisible == "about" ? "" : "about")}
      />
      <Section
        title="Details InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore sapiente est veniam officia culpa facilis temporibus enim similique, esse quia labore saepe quos exercitationem dolorum cupiditate unde voluptas sequi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis iusto assumenda, nihil ducimus modi excepturi, laborum non voluptatem harum quas cum dolorum perferendis maiores officia? Autem soluta quisquam ipsam?"
        isVisible={sectionVisible === "details"}
        setIsVisible={() => isSectionVisible(sectionVisible == "details" ? "" : "details")}
      />
      <Section
        title="Team InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore sapiente est veniam officia culpa facilis temporibus enim similique, esse quia labore saepe quos exercitationem dolorum cupiditate unde voluptas sequi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis iusto assumenda, nihil ducimus modi excepturi, laborum non voluptatem harum quas cum dolorum perferendis maiores officia? Autem soluta quisquam ipsam?"
        isVisible={sectionVisible === "team"}
        setIsVisible={() => isSectionVisible(sectionVisible == "team" ? "" : "team")}
      />
      <Section
        title="Career InstaMart"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore sapiente est veniam officia culpa facilis temporibus enim similique, esse quia labore saepe quos exercitationem dolorum cupiditate unde voluptas sequi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis iusto assumenda, nihil ducimus modi excepturi, laborum non voluptatem harum quas cum dolorum perferendis maiores officia? Autem soluta quisquam ipsam?"
        isVisible={sectionVisible === "career"}
        setIsVisible={() => isSectionVisible(sectionVisible == "career" ? "" : "career")}
      />
      {/* <AboutInstamart/>
      <DetailsInstamart/>
      <TeamInstamart/>
      <CareerInstamart/> */}
    </div>
  );
};

export default Instamart;

// const InstaMart1 = () => {
//       return (
//       <>
//       <AboutInstamart/>
//       <DetailsInstamart/>
//       <TeamInstamart/>
//       <CareerInstamart/>
//       </>
//       )
// }
