import React from "react";
import Header from "./Header";
import ListItem from "./ListItem";

const Mainpart = () => {
  const data = [
    {
      title: "design-system",
      status: "public",
      language: "React",
      database: "7320kb",
      day: "Updated 4 day ago"
    },
    {
      title: "codeant-ci-app",
      status: "private",
      language: "Javascript",
      database: "5871kb",
      day: "Updated 2 day ago"
    },
    {
      title: "analytics-dashboard",
      status: "public",
      language: "Python",
      database: "3785kb",
      day: "Updated 3 day ago"
    },
    {
      title: "mobile-app",
      status: "private",
      language: "Swift",
      database: "2563kb",
      day: "Updated 6 day ago"
    },
    {
      title: "e-commerce-platform",
      status: "public",
      language: "Java",
      database: "6472kb",
      day: "Updated 9 day ago"
    },
    {
      title: "blog-website",
      status: "public",
      language: "HTML/CSS",
      database: "7492kb",
      day: "Updated 2 day ago"
    },
    {
      title: "social-network",
      status: "private",
      language: "PHP",
      database: "1678kb",
      day: "Updated 5 day ago"
    },
  ]
  return (
    <div className=" h-full flex flex-col w-full border rounded-lg shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
      <Header />
      {
        <>
          <div className="  overflow-y-scroll">
            {
              data.map((item, index)=>(
                <ListItem key={index} {...item} />
              ))
            }
          </div>
        </>
      }
    </div>
  );
};

export default Mainpart;
