import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("https://hackathon-backend-srsa.onrender.com/api/foods/");
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };
    fetchFoods();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Select Your Favorite Food
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {foods.map((food) => (
          <div key={food._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={food.imageUrl} alt={food.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
              <p className="text-gray-600">{food.category}</p>
              <p className="text-gray-500">{food.calories} Calories</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        onClick={() => navigate("/food-selection")}
      >
        Go to Food Selection
      </button>
    </div>
  );
};

export default FoodList;
