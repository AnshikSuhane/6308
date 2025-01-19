/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, Loader2, UtensilsCrossed } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

// Define validation schema for the form
const foodFormSchema = z.object({
  name: z.string().min(2, 'Food name must be at least 2 characters'),
  category: z.string().min(1, 'Please select a category'),
  calories: z.string().min(1, 'Please enter a valid number of calories'),
  imageUrl: z.string().url().optional(),  // Add optional URL validation
});

export function FoodForm({ onSuccess  }) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
const navigate=useNavigate()
  const form = useForm({
    resolver: zodResolver(foodFormSchema),
    defaultValues: {
      name: '',
      category: '',
      calories: '',
      imageUrl: '',
    },
  });

  const { handleSubmit, formState: { errors } } = form;

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    if (!imageFile && !imageUrl) {
      toast.error('Please upload an image or provide an image URL.');
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('category', data.category);
      formData.append('calories', data.calories);
      formData.append('image', imageFile || imageUrl); // Use the URL if no file is uploaded

      const response = await fetch('https://hackathon-backend-srsa.onrender.com/api/foods/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to add food item');

      toast.success('Food item added successfully!');
      setPreview(null);
      setImageFile(null);
      setImageUrl('');
      onSuccess?.();
    } catch (error) {
      toast.error('Failed to add food item');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
          <UtensilsCrossed className="h-8 w-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black">Add New Food Item</h2>
          <p className="text-gray-500 mt-1">Share your culinary discoveries with the community</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-base text-black" htmlFor="name">Food Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-3 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter food name"
              {...form.register('name')}
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-base text-black" htmlFor="calories">Calories</label>
            <input
              id="calories"
              name="calories"
              type="number"
              className="w-full p-3 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter calories"
              {...form.register('calories')}
            />
            {errors.calories && <p className="text-red-500 text-sm mt-2">{errors.calories.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-base text-black" htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            className="w-full p-3 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            {...form.register('category')}
          >
            <option value="">Select a category</option>
            <option value="Fruits">🍎 Fruits</option>
            <option value="Vegetables">🥬 Vegetables</option>
            <option value="Proteins">🥩 Proteins</option>
            <option value="Grains">🌾 Grains</option>
            <option value="Dairy">🥛 Dairy</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-2">{errors.category.message}</p>}
        </div>

        <div className="space-y-3">
          <label className="block text-base text-black">Food Image</label>
          <div className="space-y-3">
            {preview ? (
              <div className="relative w-full h-72 rounded-xl overflow-hidden">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  className="absolute bottom-4 right-4 text-white bg-red-500 p-2 rounded-md"
                  onClick={() => {
                    setPreview(null);
                    setImageFile(null);
                  }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-72 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer"
                >
                  <div className="p-6 text-center">
                    <Upload className="h-8 w-8 text-indigo-500" />
                    <p className="text-gray-700 mt-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input
                    id="image-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
                <div className="mt-4">
                  <label className="block text-base text-black">Or provide an image URL</label>
                  <input
                    type="url"
                    placeholder="Paste image URL here"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full p-3 mt-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  />
                  {imageUrl && !/^https?:\/\//.test(imageUrl) && (
                    <p className="text-red-500 text-sm mt-2">Please provide a valid URL</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isLoading}
            onClick={navigate("/food-selection")}
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 disabled:bg-gray-400"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Adding...
              </>
            ) : (
              'Add Food Item'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}