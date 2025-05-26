'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function TourPackagesPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    price: '',
    image: '',
    highlights: ['']
  });

  // Fetch tour packages
  const fetchPackages = async () => {
    try {
      const response = await fetch('/api/tour-packages');
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setPackages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle highlights changes
  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData(prev => ({
      ...prev,
      highlights: newHighlights
    }));
  };

  // Add new highlight field
  const addHighlight = () => {
    setFormData(prev => ({
      ...prev,
      highlights: [...prev.highlights, '']
    }));
  };

  // Remove highlight field
  const removeHighlight = (index) => {
    if (formData.highlights.length > 1) {
      const newHighlights = formData.highlights.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        highlights: newHighlights
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/tour-packages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          highlights: formData.highlights.filter(h => h.trim() !== '')
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      // Reset form and refresh packages
      setFormData({
        title: '',
        duration: '',
        price: '',
        image: '',
        highlights: ['']
      });
      fetchPackages();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle package deletion
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;

    try {
      const response = await fetch(`/api/tour-packages?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      fetchPackages();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 font-['Cinzel'] text-[#2B3F55]">
        Manage Tour Packages
      </h1>

      {/* Add New Package Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 font-['Cinzel'] text-[#2B3F55]">
          Add New Package
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md"
                placeholder="e.g., 7 Days"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Highlights
            </label>
            {formData.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={highlight}
                  onChange={(e) => handleHighlightChange(index, e.target.value)}
                  required
                  className="flex-1 p-2 border rounded-md"
                  placeholder="Add a highlight"
                />
                <button
                  type="button"
                  onClick={() => removeHighlight(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addHighlight}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add Highlight
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-[#2B3F55] text-white rounded-md hover:bg-[#1a2836] disabled:bg-gray-400"
          >
            {loading ? 'Adding...' : 'Add Package'}
          </button>
        </form>
      </div>

      {/* Existing Packages List */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 font-['Cinzel'] text-[#2B3F55]">
          Existing Packages
        </h2>
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map(pkg => (
            <div key={pkg._id} className="border rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-2">{pkg.duration}</p>
                <p className="text-[#2B3F55] font-bold mb-2">${pkg.price}</p>
                <ul className="mb-4">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      • {highlight}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleDelete(pkg._id)}
                  className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 