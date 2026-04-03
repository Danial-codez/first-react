import React from "react";
import Navbar from "./assets/components/navbar";
import Box from "./assets/components/box";
import Cards from "./assets/components/cards";

const App = () => {
  const jobPostings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
      company: "Microsoft",
      datePosted: "2 days ago",
      post: "Software Engineer II",
      tag1: "Full-time",
      tag2: "Junior",
      pay: "$28/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpghttps://logo.clearbit./.com",
      company: "Google",
      datePosted: "5 days ago",
      post: "Cloud Solutions Architect",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$55/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s",
      company: "Amazon",
      datePosted: "1 day ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Junior",
      pay: "$22/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRygmy6eLYsoUb29TI2RDiyyvu7jM4RQgwI2w&s",
      company: "IBM",
      datePosted: "10 days ago",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$40/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMxeg8tBXUmlHNNgXyLvD_e6HIjdRFdHLtg&s",
      company: "SAP",
      datePosted: "3 days ago",
      post: "ERP Consultant",
      tag1: "Part-time",
      tag2: "Senior",
      pay: "$35/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsf_k03KRdC4NkZaZ5esQz8sGlxwBJ-xX9sw&s",
      company: "Oracle",
      datePosted: "7 days ago",
      post: "Database Administrator",
      tag1: "Full-time",
      tag2: "Junior",
      pay: "$20/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2T5wLk-HzBheAPdBs8EyZS6dmeUhyxSGgg&s",
      company: "Accenture",
      datePosted: "4 days ago",
      post: "React Frontend Developer",
      tag1: "Part-time",
      tag2: "Junior",
      pay: "$18/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://thumbs.dreamstime.com/z/logo-icon-vector-logos-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-paper-texture-glossy-emblem-wallpaper-210442411.jpg",
      company: "Cisco",
      datePosted: "14 days ago",
      post: "Network Security Engineer",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$48/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMseE6Uw5u3ifeceSmhtwK7HXcAuHrZh2Tg&s",
      company: "Huawei",
      datePosted: "6 days ago",
      post: "5G Network Specialist",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$52/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://www.logo.wine/a/logo/Ericsson/Ericsson-Logo.wine.svg",
      company: "Ericsson",
      datePosted: "9 days ago",
      post: "Embedded Systems Dev",
      tag1: "Part-time",
      tag2: "Junior",
      pay: "$16/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/330px-Dell_Logo.svg.png",
      company: "Dell",
      datePosted: "11 days ago",
      post: "IT Infrastructure Lead",
      tag1: "Full-time",
      tag2: "Senior",
      pay: "$44/hr",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YfIOMB4F9oka43NBNh82-g7t7GwxZrqk1w&s",
      company: "Siemens",
      datePosted: "8 days ago",
      post: "Automation Engineer",
      tag1: "Full-time",
      tag2: "Junior",
      pay: "$24/hr",
      location: "Karachi, Pakistan",
    },
  ];
  return (
    <>
      <Navbar />
      <Box />
      <div className="card_container">
        {jobPostings.map(function (elem) {
          return (
            <Cards
              salary={elem.pay}
              loc={elem.location}
              role={elem.post}
              time={elem.tag1}
              exp={elem.tag2}
              logo={elem.brandLogo}
              date={elem.datePosted}
              comp={elem.company}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
