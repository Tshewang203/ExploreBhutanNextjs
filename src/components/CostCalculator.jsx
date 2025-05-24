'use client'

import { useState } from 'react'

// Remove unused prop
export default function CostCalculator() {
  const [costBreakdown, setCostBreakdown] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState('')

  const validateInputs = (days, travelers) => {
    if (days < 1) {
      return 'Duration must be at least 1 day'
    }
    if (days > 30) {
      return 'Maximum duration is 30 days'
    }
    if (travelers < 1) {
      return 'Number of travelers must be at least 1'
    }
    if (travelers > 20) {
      return 'Maximum group size is 20 travelers'
    }
    return ''
  }

  const calculateCost = async (e) => {
    e.preventDefault()
    setError('')
    const formData = new FormData(e.currentTarget)
    
    const days = parseInt(formData.get('tripDays'))
    const travelers = parseInt(formData.get('travelers'))
    
    // Validate inputs
    const validationError = validateInputs(days, travelers)
    if (validationError) {
      setError(validationError)
      return
    }

    setIsCalculating(true)
    try {
      const season = formData.get('season')
      const accommodation = formData.get('accommodationType')
      const privateGuide = formData.get('guideService') === 'on'
      const privateTransport = formData.get('transportation') === 'on'
      const activities = formData.get('activities') === 'on'

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Base rates
      const baseRate = season === 'peak' ? 250 : 200
      let accommodationRate

      switch(accommodation) {
        case '3star': accommodationRate = 100; break
        case '4star': accommodationRate = 150; break
        case '5star': accommodationRate = 250; break
        case 'luxury': accommodationRate = 400; break
        default: accommodationRate = 100
      }

      // Calculate costs
      const baseCost = baseRate * days * travelers
      const accommodationCost = accommodationRate * days * travelers
      const guideCost = privateGuide ? 50 * days : 0
      const transportCost = privateTransport ? 80 * days : 0
      const activitiesCost = activities ? 40 * days * travelers : 0

      const totalCost = baseCost + accommodationCost + guideCost + transportCost + activitiesCost

      setCostBreakdown({
        baseCost,
        accommodationCost,
        guideCost,
        transportCost,
        activitiesCost,
        totalCost,
        details: { // Add trip details for reference
          days,
          travelers,
          season,
          accommodation,
          privateGuide,
          privateTransport,
          activities
        }
      })

      // Scroll to results
      setTimeout(() => {
        document.getElementById('cost-breakdown')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      setError('An error occurred while calculating the cost. Please try again.')
    } finally {
      setIsCalculating(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 font-['Cinzel'] text-[#2B3F55]">
        Calculate Your Trip Cost
      </h2>
      
      <form onSubmit={calculateCost} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Duration (Days)</label>
            <input type="number" name="tripDays" min="1" max="30" required className="w-full p-2 border rounded-lg" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Number of Travelers</label>
            <input type="number" name="travelers" min="1" max="20" required className="w-full p-2 border rounded-lg" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Season</label>
            <select name="season" className="w-full p-2 border rounded-lg">
              <option value="regular">Regular Season</option>
              <option value="peak">Peak Season</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">Accommodation Type</label>
            <select name="accommodationType" className="w-full p-2 border rounded-lg">
              <option value="3star">3-Star Hotel</option>
              <option value="4star">4-Star Hotel</option>
              <option value="5star">5-Star Hotel</option>
              <option value="luxury">Luxury Resort</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <input type="checkbox" name="guideService" id="guideService" className="mr-2" />
            <label htmlFor="guideService">Private Guide Service</label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="transportation" id="transportation" className="mr-2" />
            <label htmlFor="transportation">Private Transportation</label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="activities" id="activities" className="mr-2" />
            <label htmlFor="activities">Additional Activities & Tours</label>
          </div>
        </div>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <button
          type="submit"
          disabled={isCalculating}
          className="w-full bg-[#2B3F55] text-white py-2 rounded-lg hover:bg-[#1a2733] transition-colors"
        >
          {isCalculating ? 'Calculating...' : 'Calculate Cost'}
        </button>
      </form>

      {costBreakdown && (
        <div id="cost-breakdown" className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 font-['Cinzel'] text-[#2B3F55]">
            Estimated Trip Cost
          </h3>
          <div className="space-y-2 font-['Playfair_Display']">
            <div className="flex justify-between items-center py-2 border-b">
              <span>Base Package Cost:</span>
              <span className="font-bold">${costBreakdown.baseCost}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Accommodation:</span>
              <span className="font-bold">${costBreakdown.accommodationCost}</span>
            </div>
            {costBreakdown.guideCost > 0 && (
              <div className="flex justify-between items-center py-2 border-b">
                <span>Private Guide:</span>
                <span className="font-bold">${costBreakdown.guideCost}</span>
              </div>
            )}
            {costBreakdown.transportCost > 0 && (
              <div className="flex justify-between items-center py-2 border-b">
                <span>Private Transportation:</span>
                <span className="font-bold">${costBreakdown.transportCost}</span>
              </div>
            )}
            {costBreakdown.activitiesCost > 0 && (
              <div className="flex justify-between items-center py-2 border-b">
                <span>Activities & Tours:</span>
                <span className="font-bold">${costBreakdown.activitiesCost}</span>
              </div>
            )}
            <div className="flex justify-between items-center py-4 mt-2 border-t-2 border-[#2B3F55]">
              <span className="text-xl font-bold text-[#2B3F55]">Total Estimated Cost:</span>
              <span className="text-xl font-bold text-[#2B3F55]">
                ${costBreakdown.totalCost}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              *Prices are estimates and may vary based on availability and season. The final cost will be confirmed upon booking.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}