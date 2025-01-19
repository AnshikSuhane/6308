
const About = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-center text-indigo-600 mb-8 transition-transform transform hover:scale-110 duration-300">
            About Calorie Calculator
          </h1>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed transition-opacity opacity-80 hover:opacity-100 duration-300">
            A calorie calculator is an essential tool for individuals who are looking to monitor their diet, maintain a healthy lifestyle, or achieve specific fitness goals. The primary function of a calorie calculator is to estimate the total number of calories a person should consume daily, depending on factors such as age, gender, weight, height, activity level, and specific goals like weight loss, weight maintenance, or muscle gain.
          </p>

          <div className="space-y-6">
            <div className="transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 hover:text-indigo-500">
                Why Use a Calorie Calculator?
              </h2>
              <p className="text-gray-700 leading-relaxed transition-transform transform hover:scale-105 duration-300">
                Using a calorie calculator is the first step toward making informed dietary decisions. By calculating how many calories your body needs to function optimally, you can ensure that you are consuming the right amount of food. Whether you want to lose weight or gain muscle, understanding your caloric needs is crucial.
              </p>
            </div>

            <div className="transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 hover:text-indigo-500">
                How Does a Calorie Calculator Work?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 hover:text-gray-800 duration-300">
                A calorie calculator works by using various formulas and data points such as your age, gender, height, weight, and activity level. The most common formula used for calculating calorie needs is the Mifflin-St Jeor equation. It takes these parameters and estimates how many calories your body needs to maintain its current weight.
              </p>
              <p className="text-gray-700 leading-relaxed hover:text-gray-800 duration-300">
                The basic idea is that if you consume more calories than your body needs, the excess calories will be stored as fat, leading to weight gain. Conversely, if you consume fewer calories than required, your body will burn stored fat for energy, which leads to weight loss.
              </p>
            </div>

            <div className="transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 hover:text-indigo-500">
                Factors Considered in the Calorie Calculation:
              </h2>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li><strong>Age:</strong> Older individuals typically need fewer calories.</li>
                <li><strong>Gender:</strong> Men usually require more calories than women due to higher muscle mass.</li>
                <li><strong>Weight and Height:</strong> Heavier and taller individuals generally need more calories.</li>
                <li><strong>Activity Level:</strong> A sedentary lifestyle requires fewer calories than an active one.</li>
              </ul>
            </div>

            <div className="transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 hover:text-indigo-500">
                Calorie Calculation for Different Goals
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your goal, you can adjust your daily calorie intake:
              </p>
              <ul className="list-disc pl-8 text-gray-700 space-y-2">
                <li><strong>Weight Loss:</strong> Consume fewer calories than your maintenance level to create a calorie deficit.</li>
                <li><strong>Weight Maintenance:</strong> Consume the same number of calories as your body burns.</li>
                <li><strong>Muscle Gain:</strong> Consume more calories than your body burns to provide the extra energy for muscle growth.</li>
              </ul>
            </div>

            <div className="transition-transform transform hover:scale-105 duration-300">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 hover:text-indigo-500">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed hover:text-gray-800 duration-300">
                A calorie calculator is a powerful tool that helps you better understand your nutritional needs. By using it, you can make informed decisions about your diet and achieve your desired fitness goals more effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
