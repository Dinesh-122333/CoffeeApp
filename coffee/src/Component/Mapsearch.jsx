// AIzaSyD6CEcUXp-YIb1mwI6YNGHpcoOhKb2j4Ks
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import Aos from "aos";
import "aos/dist/aos.css";
import points from "../assets/images/points.png";

const mapContainerStyle = {
    width: "100%",
    height: "75vh", // Adjust height based on screen size
  };
  

const center = { lat: 13.0827, lng: 80.2707 }; // Centered on Chennai, India

const coffeeLocations = {
    "India": { lat: 13.0827, lng: 80.2707 },
    "Italy": { lat: 41.9028, lng: 12.4964 },
    "Ethiopia": { lat: 9.145, lng: 40.4897 },
    "Brazil": { lat: -23.5505, lng: -46.6333 },
    "Turkey": { lat: 39.9334, lng: 32.8597 },
    "Japan": { lat: 35.6895, lng: 139.6917 },
    "Colombia": { lat: 4.7110, lng: -74.0721 },
    "Vietnam": { lat: 21.0285, lng: 105.8542 },
    "Mexico": { lat: 19.4326, lng: -99.1332 },
    "France": { lat: 48.8566, lng: 2.3522 },
    "United States": { lat: 40.7128, lng: -74.0060 },
    "Indonesia": { lat: -6.2088, lng: 106.8456 },
    "Australia": { lat: -33.8688, lng: 151.2093 },
    "New Zealand": { lat: -36.8485, lng: 174.7633 },
    "China": { lat: 39.9042, lng: 116.4074 },
    "Mongolia": { lat: 47.9153, lng: 106.9176 },
    "Russia": { lat: 55.7558, lng: 37.6173 },
    "Afghanistan": { lat: 34.5553, lng: 69.2075 },
    "Pakistan": { lat: 31.5497, lng: 74.3436 },
    "Sweden": { lat: 59.3293, lng: 18.0686 },
    "Egypt": { lat: 30.0444, lng: 31.2357 },
    "Kenya": { lat: -1.286389, lng: 36.817223 },
    "Tanzania": { lat: -6.369028, lng: 34.888822 },
    "Ivory Coast": { lat: 5.345317, lng: -4.024429 },
    "South Africa": { lat: -33.9249, lng: 18.4241 }
};
const coffeeData = [
    {
        "country": "India",
        "coffee": [
            {
                "name": "Filter Coffee",
                "description": "A strong, aromatic coffee made by brewing finely ground coffee with chicory in a traditional metal filter. It is mixed with hot milk and sugar, creating a rich, frothy drink."
            },
            {
                "name": "Indian Spiced Coffee",
                "description": "A flavorful coffee infused with spices like cinnamon, cloves, and cardamom, often sweetened with sugar or honey."
            }
        ]
    },
    {
        "country": "Italy",
        "coffee": [
            {
                "name": "Espresso",
                "description": "A concentrated coffee brewed by forcing hot water through finely ground coffee beans, known for its bold flavor and crema."
            },
            {
                "name": "Cappuccino",
                "description": "A coffee drink made with equal parts espresso, steamed milk, and milk foam, often topped with cocoa powder or cinnamon."
            },
            {
                "name": "Macchiato",
                "description": "An espresso 'stained' with a small amount of milk, creating a balance between strong coffee and creamy texture."
            }
        ]
    },
    {
        "country": "Ethiopia",
        "coffee": [
            {
                "name": "Yirgacheffe",
                "description": "A high-quality Ethiopian coffee known for its bright acidity, floral aroma, and citrusy notes."
            },
            {
                "name": "Harrar",
                "description": "A bold, fruity coffee with wine-like characteristics, often exhibiting notes of blueberry and chocolate."
            },
            {
                "name": "Sidamo",
                "description": "A well-balanced coffee with a medium body, bright acidity, and complex flavors ranging from floral to citrus."
            }
        ]
    },
    {
        "country": "Brazil",
        "coffee": [
            {
                "name": "Café com Leite",
                "description": "A simple yet popular Brazilian coffee made by mixing strong coffee with hot milk, similar to a café au lait."
            },
            {
                "name": "Cafezinho",
                "description": "A strong, sweet coffee traditionally brewed with sugar and served in small cups, symbolizing Brazilian hospitality."
            }
        ]
    },
    {
        "country": "Turkey",
        "coffee": [
            {
                "name": "Turkish Coffee",
                "description": "A thick, unfiltered coffee brewed in a cezve, often flavored with cardamom and served with a layer of foam."
            }
        ]
    },
    {
        "country": "Japan",
        "coffee": [
            {
                "name": "Kyoto-style Drip Coffee",
                "description": "A slow-drip cold brew method originating in Kyoto, producing a smooth, less acidic coffee."
            },
            {
                "name": "Sumiyaki Coffee",
                "description": "A charcoal-roasted coffee known for its deep, smoky flavor and rich aroma."
            }
        ]
    },
    {
        "country": "Colombia",
        "coffee": [
            {
                "name": "Colombian Supremo",
                "description": "A high-quality Colombian coffee with a smooth body, bright acidity, and notes of chocolate and caramel."
            },
            {
                "name": "Tinto Coffee",
                "description": "A traditional Colombian black coffee, often served sweetened and enjoyed throughout the day."
            }
        ]
    },
    {
        "country": "Vietnam",
        "coffee": [
            {
                "name": "Vietnamese Egg Coffee",
                "description": "A unique coffee made by whipping egg yolks with condensed milk and sugar, creating a creamy, dessert-like drink."
            },
            {
                "name": "Cà Phê Sữa",
                "description": "A Vietnamese iced coffee made with strong coffee and sweetened condensed milk, served over ice."
            }
        ]
    },
    {
        "country": "Mexico",
        "coffee": [
            {
                "name": "Café de Olla",
                "description": "A traditional Mexican coffee brewed with cinnamon, piloncillo (unrefined cane sugar), and sometimes cloves or orange peel."
            },
            {
                "name": "Mexican Mocha",
                "description": "A spiced coffee combining chocolate, cinnamon, and a hint of cayenne pepper for a bold, warming drink."
            }
        ]
    },
    {
        "country": "France",
        "coffee": [
            {
                "name": "Café au Lait",
                "description": "A French coffee made with equal parts brewed coffee and steamed milk, often served in a bowl."
            },
            {
                "name": "French Press Coffee",
                "description": "A full-bodied coffee brewed by steeping coarsely ground coffee in hot water and pressing it through a metal filter."
            }
        ]
    },
    {
        "country": "United States",
        "coffee": [
            {
                "name": "Cold Brew",
                "description": "A smooth, less acidic coffee made by steeping coarsely ground coffee in cold water for 12–24 hours."
            },
            {
                "name": "Espresso",
                "description": "A concentrated coffee brewed by forcing hot water through finely ground coffee beans, known for its bold flavor and crema."
            }
        ]
    },
    {
        "country": "Indonesia",
        "coffee": [
            {
                "name": "Kopi Luwak",
                "description": "A rare and expensive coffee made from beans that have been eaten and excreted by civets, resulting in a unique fermentation process."
            },
            {
                "name": "Sumatra Coffee",
                "description": "A full-bodied coffee with earthy, herbal notes and low acidity, often processed using the wet-hulling method."
            }
        ]
    },
    {
        "country": "Australia",
        "coffee": [
            {
                "name": "Flat White",
                "description": "An espresso-based drink with microfoam, offering a velvety texture and strong coffee flavor."
            },
            {
                "name": "Long Black",
                "description": "A double shot of espresso poured over hot water, preserving the crema for a bold and aromatic taste."
            }
        ]
    },
    {
        "country": "New Zealand",
        "coffee": [
            {
                "name": "Flat White",
                "description": "Similar to the Australian version, but often served in a smaller cup for a stronger coffee-to-milk ratio."
            },
            {
                "name": "Piccolo Latte",
                "description": "A small latte made with a ristretto shot and steamed milk, offering a concentrated yet smooth coffee experience."
            }
        ]
    },
    {
        "country": "China",
        "coffee": [
            {
                "name": "Yunnan Coffee",
                "description": "A specialty coffee grown in Yunnan province, known for its mild acidity, floral notes, and balanced body."
            },
            {
                "name": "Sweetened Milk Coffee",
                "description": "A rich and creamy coffee sweetened with condensed milk, popular in various Chinese regions."
            }
        ]
    },
    {
        "country": "Mongolia",
        "coffee": [
            {
                "name": "Salted Milk Tea Coffee",
                "description": "A unique blend of tea, coffee, and milk with a pinch of salt, offering a savory twist to traditional coffee."
            }
        ]
    },
    {
        "country": "Russia",
        "coffee": [
            {
                "name": "Raf Coffee",
                "description": "A creamy coffee made by steaming espresso with cream and vanilla sugar, resulting in a smooth, dessert-like drink."
            },
            {
                "name": "Russian Coffee",
                "description": "A strong, full-bodied coffee often brewed with condensed milk or spices for added richness."
            }
        ]
    },
    {
        "country": "Afghanistan",
        "coffee": [
            {
                "name": "Kahwah (Spiced Green Tea Coffee)",
                "description": "A fragrant green tea infused with spices like cardamom, cinnamon, and saffron, sometimes blended with coffee."
            }
        ]
    },
    {
        "country": "Pakistan",
        "coffee": [
            {
                "name": "Doodh Patti Coffee",
                "description": "A milk-based coffee brewed without water, offering a rich and creamy texture with a strong tea-like infusion."
            },
            {
                "name": "Peshawari Kahwa",
                "description": "A traditional spiced tea with green cardamom and saffron, sometimes enjoyed with coffee for a unique blend."
            }
        ]
    },
    {
        "country": "Sweden",
        "coffee": [
            {
                "name": "Kaffeost (Cheese Coffee)",
                "description": "A Scandinavian specialty where cubes of cheese are soaked in hot coffee, creating a rich and creamy texture."
            },
            {
                "name": "Fika Coffee",
                "description": "A Swedish coffee tradition emphasizing social breaks, often accompanied by pastries and strong brewed coffee."
            }
        ]
    },
    {
        "country": "Egypt",
        "coffee": [
            {
                "name": "Ahwa (Egyptian Coffee)",
                "description": "A strong, unfiltered coffee brewed with cardamom, often enjoyed in traditional Egyptian coffeehouses."
            },
            {
                "name": "Spiced Cardamom Coffee",
                "description": "A bold coffee infused with cardamom and other spices, offering a fragrant and warming experience."
            }
        ]
    },
    {
        "country": "Kenya",
        "coffee": [
            {
                "name": "Kenyan AA Coffee",
                "description": "A high-quality Kenyan coffee known for its bright acidity, fruity notes, and full-bodied flavor."
            },
            {
                "name": "Nyeri Coffee",
                "description": "A specialty coffee from Nyeri, Kenya, featuring complex flavors with hints of blackcurrant and citrus."
            }
        ]
    },
    {
        "country": "Tanzania",
        "coffee": [
            {
                "name": "Peaberry Coffee",
                "description": "A rare coffee variety where only one bean develops inside the cherry, resulting in a concentrated and smooth flavor."
            }
        ]
    },
    {
        "country": "Ivory Coast",
        "coffee": [
            {
                "name": "Robusta Coffee",
                "description": "A strong and bold coffee with high caffeine content, commonly used in espresso blends."
            },
            {
                "name": "Ivorian Café Touba",
                "description": "A spiced coffee infused with Guinea pepper, offering a smoky and peppery kick."
            }
        ]
    },
    {
        "country": "South Africa",
        "coffee": [
            {
                "name": "Rooibos Espresso",
                "description": "A caffeine-free espresso made from rooibos tea, offering a rich and earthy flavor."
            },
            {
                "name": "South African Mocha",
                "description": "A chocolate-infused coffee with a smooth and creamy texture, popular in South African cafés."
            }
        ]
    }
];


export default function Mapsearch() {
    useEffect(() => {
      Aos.init({
        duration: 1600,
      });
    }, []);
  

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [hoveredCountry, setHoveredCountry] = useState(null);

    return (
        <>
            <div className="py-4">
                <h1 className="text-amber-700 font-bold text-4xl md:text-5xl mb-6 drop-shadow-lg text-center" data-aos="fade-up">
                    Discover the Coffees Around the World
                </h1>
            </div>
            <div className="py-10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between gap-6">
                <LoadScript googleMapsApiKey= GOOGLE_MAPS_API_KEY>
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={3}>
                        {Object.entries(coffeeLocations).map(([country, location]) => (
                            <Marker
                                key={country}
                                position={location}
                                onClick={() => setSelectedCountry(country)}
                                onMouseOver={() => setHoveredCountry(country)}
                                onMouseOut={() => setHoveredCountry(null)}
                            />
                        ))}

                        {hoveredCountry && (
                            <InfoWindow
                                position={{
                                    lat: coffeeLocations[hoveredCountry].lat, 
                                    lng: coffeeLocations[hoveredCountry].lng + 8 // Moves tooltip to the right
                                }}
                                onCloseClick={() => setHoveredCountry(null)}
                            >
                                <div className="bg-amber-500 text-white rounded-md p-2 text-sm shadow-md">
                                    <p className="font-bold">{hoveredCountry}</p>
                                    <p>☕{coffeeData[hoveredCountry]?.[0]}</p> {/* Displays the first coffee from the country */}
                                </div>
                            </InfoWindow>
                        
                        )}
                    </GoogleMap>
                </LoadScript>

                {selectedCountry && (
                    <div className="bg-amber-50 rounded-lg shadow-md p-6 mt-4 max-w-md mx-auto text-center">
                        <h3 className="text-3xl text-amber-900 font-extrabold mb-4">{selectedCountry}'s Coffee Specialties</h3>
                        <ul className="space-y-2">
                            {coffeeData.find(item => item.country === selectedCountry)?.coffee.map((coffee, index) => (
                                <li key={index} className="flex flex-col items-start justify-start gap-2 border-b border-amber-300 pb-2">
                                    <div className="flex items-center gap-3">
                                        <img src={points} alt="bullet" className="w-4 h-4 mt-1 opacity-80" />
                                        <span className="text-lg font-semibold text-amber-700">{coffee.name}</span>
                                    </div>
                                    <p className="text-sm text-amber-600 text-left">{coffee.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </>
    );
}
