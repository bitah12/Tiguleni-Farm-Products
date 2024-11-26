import CropsIcon from "/public/crops.png";
import LivestockIcon from "/public/livestock.png";
import MachineryIcon from "/public/machinery.png";
import AgrochemicalsIcon from "/public/agrochemicals.png";
import FertilizersIcon from "/public/fertilizers.png";
import SeedsIcon from "/public/seeds.png";
import DairyIcon from "/public/dairy.png";
import PoultryIcon from "/public/poultry.png";
import FruitsIcon from "/public/fruits.png";
import VegetablesIcon from "/public/vegetables.png";
import AnimalFeedIcon from "/public/animal_feed.png";
import FarmToolsIcon from "/public/farm_tools.png";

const categories = [
  { name: "Crops", icon: CropsIcon },
  { name: "Livestock", icon: LivestockIcon },
  { name: "Machinery", icon: MachineryIcon },
  { name: "Agrochemicals", icon: AgrochemicalsIcon },
  { name: "Fertilizers", icon: FertilizersIcon },
  { name: "Seeds", icon: SeedsIcon },
  { name: "Dairy", icon: DairyIcon },
  { name: "Poultry", icon: PoultryIcon },
  { name: "Fruits", icon: FruitsIcon },
  { name: "Vegetables", icon: VegetablesIcon },
  { name: "Animal Feed", icon: AnimalFeedIcon },
  { name: "Farm Tools", icon: FarmToolsIcon },
];

const ProductCategories = () => {
  return (
    <div className="mt-20">
       <div className=" ml-[75px]"><div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <div className="bg-red-500  rounded-md h-[50px] w-[27px]"></div>
          <h2 className="mt-3 text-xl font-bold text-red-500">Farm Products</h2>
        </div>
      </div><h3 className="text-2xl relative -left-[540px] font-bold mb-6">Products By Categories</h3>
      <div className="p-8">
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative -left-5 flex w-40 flex-col items-center justify-center p-4  border border-gray-950 rounded-md shadow-md hover:shadow-lg"
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-16 h-16 mb-3"
            />
            <span className="text-gray-700 text-lg font-medium">{category.name}</span>
          </div>
        ))}
      </div></div>
    </div>
  );
};

export default ProductCategories;
