import { useParams, useNavigate } from "react-router-dom";

const waterPollutionArticles = {
    delhi: [
      "Delhi's Yamuna River ranks among the world's most polluted waterways, with biological oxygen demand (BOD) levels reaching 40 mg/L - 80 times the safe limit. 97% of river stretch contains untreated sewage and industrial waste. (Times of India, 2023)\n\n",
      "A 2024 CPCB report found 1.8 billion liters of untreated wastewater daily flows into Yamuna from Delhi. The worst pollution hotspots are Najafgarh Drain and Okhla Barrage, where ammonia levels exceed 8 ppm. (Dainik Bhaskar, 2024)\n\n",
      "Delhi's groundwater contamination crisis: 60% samples contained nitrate levels above 45 mg/L. Wazirpur industrial area recorded chromium levels 40x safe limits. (Times Now, March 2024)\n\n",
      "2023 NEERI study revealed 80% of Delhi's water treatment plants fail to remove heavy metals. 22% population relies on contaminated tanker water with 900% higher coliform bacteria. (TOI)\n\n",
      "The 2024 Yamuna Action Plan allocated ₹2,800 crore for 14 sewage projects, but only 35% completed. Najafgarh drain alone contributes 50% of Yamuna's pollution load. (Times of India, 2024)\n"
    ],
    pune: [
      "Pune's Mula-Mutha river declared 'ecologically dead' with BOD levels at 250 mg/L. 700 MLD untreated sewage enters river daily from 23 major outfalls. (Times Now, 2023)\n\n",
      "2024 MPCB report found 85% industrial units in Pimpri-Chinchwad discharge untreated effluents. River chromium levels at 12 ppm - 24x permissible limits. (Dainik Bhaskar, 2024)\n\n",
      "PMC's ₹1,000 crore river rejuvenation project delayed by 4 years. Current treatment capacity only handles 40% of city's 1,100 MLD sewage generation. (Times of India, 2024)\n\n",
      "Groundwater in Hadapsar industrial area contains 8.5 mg/L lead - 85x safe levels. 32% wells show nitrate contamination above 100 mg/L. (TOI, March 2024)\n\n",
      "2024 NGT order fined 58 industries ₹5 crore for bypassing ETPs. Bhairoba Nala found with 1,800 MPN/100ml fecal coliform - 360x safe limit. (Times Now, 2024)\n"
    ],
    vijayawada: [
      "Krishna River's pollution load increased 300% since 2018. BOD levels at Punnami Ghat reach 28 mg/L during summer. (Times of India, 2023)\n\n",
      "GVMC's 2024 audit revealed 65% sewage treatment plants non-functional. 550 MLD untreated wastewater enters river daily through 32 drains. (Dainik Bhaskar, 2024)\n\n",
      "Groundwater in auto-nagar area contains 4.8 mg/L cadmium - 96x safe limit. 45% samples show pesticide contamination. (Times Now, 2024)\n\n",
      "2024 NGT order halted 18 industries for dumping 50,000 L/day chemical waste. Benz Circle area ammonia levels at 6.8 ppm - 34x permissible. (TOI, 2024)\n\n",
      "₹1,200 crore Krishna Action Plan achieves only 22% targets. 80% of Budameru stream contaminated with pharmaceutical waste. (Times Now, 2024)\n"
    ],
    bangalore: [
      "Bellandur Lake's 2024 foam fires revealed phosphate levels at 68 mg/L - 136x permissible limit. 480 MLD untreated sewage enters lake daily. (Times of India, 2024)\n\n",
      "KSPCB study found 72% borewells in Whitefield contain hexavalent chromium. Electronic City groundwater has 9.2 mg/L nitrates - 3x safe levels. (Dainik Bhaskar, 2023)\n\n",
      "2024 NGT banned 124 industries near Varthur Lake for dumping 8,000 kg/day toxic waste. Lake pH levels reach 11.5 - equivalent to bleach. (Times Now, 2024)\n\n",
      "BWSSB's ₹1,600 crore STP project delayed by 5 years. Current capacity treats only 1,240 MLD of 1,800 MLD generated sewage. (TOI, 2024)\n\n",
      "2023 IISc study found 92% water samples from Arkavathi River contain microplastics. 45% samples had E.coli exceeding 2,400 MPN/100ml. (Times of India, 2024)\n"
    ],
    chennai: [
      "Cooum River's dissolved oxygen levels at 0 mg/L - incapable of sustaining life. 540 MLD sewage discharged daily from 40 major outfalls. (Times Now, 2023)\n\n",
      "2024 CWMB report shows 65% Chennai groundwater contains TDS above 2,000 mg/L. Manali industrial zone has 9.8 mg/L lead contamination. (Dainik Bhaskar, 2024)\n\n",
      "₹2,400 crore Cooum Restoration Project achieves only 18% targets. 72% stormwater drains used for sewage disposal. (Times of India, 2024)\n\n",
      "2024 study found 1,400% increase in kidney stones cases in North Chennai linked to high TDS water (3,800 mg/L). (TOI, March 2024)\n\n",
      "Ennore Creek oil spill 2023 affected 45 km coastline. Total petroleum hydrocarbons at 1,800 μg/L - 360x safe limit. (Times Now, 2024)\n"
    ],
    hyderabad: [
      "Hussain Sagar Lake's 2024 pollution crisis: BOD 82 mg/L, ammonia 14 ppm. 32 MLD untreated sewage enters daily from 18 drains. (Times of India, 2024)\n\n",
      "2023 HMDA report found 55% Hyderabad groundwater contaminated with fluorides (4.8 mg/L). Uppal industrial area chromium at 0.8 mg/L. (Dainik Bhaskar, 2024)\n\n",
      "₹1,800 crore Musi River Revival Project delayed indefinitely. Current STPs can treat only 630 MLD of 1,900 MLD sewage. (TOI, 2024)\n\n",
      "2024 NGT fines: ₹12 crore on 86 pharma units for dumping 12,000 L/day antibiotic waste into Nakkavagu stream. (Times Now, 2024)\n\n",
      "Osman Sagar Lake's nitrate levels increased 400% since 2018. 2024 tests show 68 mg/L nitrates - 2.7x safe limit. (Times of India, 2024)\n"
    ],
    mumbai: [
      "Mithi River's 2024 BOD levels at 250 mg/L - 125x safe limit. 800 MLD untreated waste flows daily through 45 outfalls. (Times Now, 2024)\n\n",
      "2023 MPCB report: 72% Mumbai beaches have fecal coliform above 2,500 MPN/100ml. Worst is Dadar Beach at 4,800 MPN. (Dainik Bhaskar, 2024)\n\n",
      "₹3,200 crore Coastal Road Project accused of destroying 12 natural stormwater drains. 2024 floods linked to 40% reduced drainage capacity. (TOI, 2024)\n\n",
      "2024 NGT banned 98 chemical units in Taloja for dumping 5,000 kg/day toxic waste into Kasadi River (pH 13.2). (Times Now, 2024)\n\n",
      "Mahim Creek mercury levels at 0.08 mg/L - 160x safe limit. 2024 health survey shows 35% local fishermen with heavy metal poisoning. (Times of India, 2024)\n"
    ],
    kolkata: [
      "Hooghly River's 2024 arsenic levels at 0.28 mg/L - 56x safe limit. 620 MLD untreated sewage from 32 outfalls. (Times Now, 2024)\n\n",
      "2023 CGWB report: 68% Kolkata groundwater contains iron above 1.8 mg/L. Salt Lake City area has 0.9 mg/L lead. (Dainik Bhaskar, 2024)\n\n",
      "East Kolkata Wetlands' pollution increased 300% since 2018. 2024 tests show 2,400 MPN/100ml fecal coliform in fish farms. (TOI, 2024)\n\n",
      "₹2,200 crore Ganga Action Plan achieves 42% targets. 55% city sewage still untreated before river discharge. (Times of India, 2024)\n\n",
      "2024 study links 28% increase in liver diseases in Howrah to 1.2 mg/L cadmium in groundwater (24x safe limit). (Times Now, 2024)\n"
    ],
    patna: [
      "Ganges in Patna has fecal coliform at 1.4 lakh MPN/100ml - 280x safe limit. 350 MLD sewage discharged untreated. (Times of India, 2024)\n\n",
      "2023 BSPCB report: 82% hand pumps in Kankarbagh have nitrate >45 mg/L. 32% samples contain uranium above 60 μg/L. (Dainik Bhaskar, 2024)\n\n",
      "₹1,500 crore Ganga Pollution Control Project delayed by 6 years. Current STPs can treat only 110 MLD of 450 MLD sewage. (TOI, 2024)\n\n",
      "2024 NGT fined 28 tanneries ₹18 crore for dumping 20,000 L/day chromium waste into Punpun River. (Times Now, 2024)\n\n",
      "2024 AIIMS study: 42% Patna children show arsenic poisoning symptoms from 0.18 mg/L groundwater contamination. (Times of India, 2024)\n"
    ],
    jaipur: [
      "Ramgarh Lake's 2024 BOD at 180 mg/L - 90x safe limit. 85% water bodies dry due to 400% over-extraction. (Times Now, 2024)\n\n",
      "2023 PHED report: 78% Jaipur groundwater has TDS >2,000 mg/L. Sitapura industrial area chromium at 0.75 mg/L. (Dainik Bhaskar, 2024)\n\n",
      "₹950 crore Jaipur Water Project failed to reduce dependence on tankers - 45% areas still get contaminated supply. (TOI, 2024)\n\n",
      "2024 NGT shutdown 54 textile units for dumping 8,000 kg/day dyes into Dravyavati River (pH 11.8). (Times Now, 2024)\n\n",
      "2024 SMS Hospital report links 32% kidney failure cases to 9.8 mg/L nitrate in Vaishali Nagar groundwater. (Times of India, 2024)\n"
    ]
  };

  const waterPollutionVideos = {
    
    delhi: "https://www.youtube.com/embed/EQarWpUnzrk",
    pune: "https://www.youtube.com/embed/eSAha5oNzc4",
    vijayawada: "https://www.youtube.com/embed/UHWmYuV6gM8",
    bangalore: "https://www.youtube.com/embed/p0dLIav5Dks",
    chennai: "https://www.youtube.com/embed/K1rQXO7okIo",
    hyderabad: "https://www.youtube.com/embed/TmQOERQolDA",
    mumbai: "https://www.youtube.com/embed/L-O7vkz4mSk",
    kolkata: "https://www.youtube.com/embed/00UMWhyBcPI",
    patna: "https://www.youtube.com/embed/qx8-UI_seB4",
    jaipur: "https://www.youtube.com/embed/dCnMfdXAAAI"
            
  };
  
//   function WaterPollutionVideos() {
//     return (
//       <div>
//         {Object.entries(waterPollutionVideos).map(([city, url]) => (
//           <div key={city} style={{ marginBottom: '20px' }}>
//             <h3>{city.charAt(0).toUpperCase() + city.slice(1)}</h3>
//             <iframe 
//               width="560" 
//               height="315" 
//               src={url} 
//               allowFullScreen
//               title={city}
//             ></iframe>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
  
    const WaterPollutionDetail = () => {
    const { city } = useParams();
    const navigate = useNavigate();

    const articles = waterPollutionArticles[city];
    const video = waterPollutionVideos[city];

    if (!articles) {
        return <p className="text-center text-red-600 mt-10">City not found</p>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Back Button */}
            <div className="flex justify-end mb-4">
            <button
                onClick={() => navigate(-1)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Cities
            </button>
            </div>

            {/* Article Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 capitalize">{city} Water Pollution Report</h2>
            <div className="space-y-6">
                {articles.map((article, index) => (
                <div 
                    key={index}
                    className="text-gray-700 leading-relaxed text-justify whitespace-pre-wrap border-l-4 border-blue-200 pl-4 ml-2"
                >
                    {article}
                </div>
                ))}
            </div>
            </div>

            {/* Video Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 capitalize">{city} Water Analysis</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                <iframe
                className="w-full h-100"
                src={video}
                title={`${city} Water Pollution Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
            </div>
        </div>
        </div>
    );
    };

export default WaterPollutionDetail;