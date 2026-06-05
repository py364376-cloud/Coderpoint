import React from "react";

export default function PartnerCompanies() {
  const companies = [
    { name: "IBM", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Microsoft", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "TCS", img: "https://tse2.mm.bing.net/th/id/OIP.NtXk46ERIZV5GhyN1e4N-AHaEa?pid=Api&P=0&h=180" },
    { name: "Infosys", img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "Wipro", img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Wipro_new_logo.svg" },
    { name: "Accenture", img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "Cognizant", img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
    { name: "Capgemini", img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
  ];

  return (
    <section className="py-20 bg-blue-400 overflow-hidden">
      <h2 className="text-5xl font-bold text-center mb-14 text-white">
        Hiring Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="min-w-[220px] mx-4 bg-white rounded-3xl shadow-xl p-6 flex items-center justify-center h-36 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={company.img}
                alt={company.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            width: max-content;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}