import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  nationality: { type: String, required: true },
  passportNumber: { type: String, required: true },
  arrivalDate: { type: Date, required: true },
  departureDate: { type: Date, required: true },
  tourPackage: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, default: 0 },
  specialRequests: String,
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  bookingRef: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema);