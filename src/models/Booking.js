import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  alternateEmail: {
    type: String,
    trim: true,
    lowercase: true
  },
  nationality: {
    type: String,
    required: [true, 'Nationality is required'],
    trim: true
  },
  passportNumber: {
    type: String,
    required: [true, 'Passport number is required'],
    trim: true
  },
  tourPackage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TourPackage',
    required: [true, 'Tour package is required']
  },
  arrivalDate: {
    type: Date,
    required: [true, 'Arrival date is required']
  },
  departureDate: {
    type: Date,
    required: [true, 'Departure date is required']
  },
  adults: {
    type: Number,
    required: [true, 'Number of adults is required'],
    min: [1, 'At least one adult is required']
  },
  children: {
    type: Number,
    default: 0,
    min: 0
  },
  specialRequests: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  bookingDate: {
    type: Date,
    default: Date.now
  }
});

// Add a pre-save hook to validate dates
bookingSchema.pre('save', function(next) {
  // Check if arrival date is in the future
  if (this.arrivalDate < new Date()) {
    next(new Error('Arrival date must be in the future'));
  }

  // Check if departure date is after arrival date
  if (this.departureDate <= this.arrivalDate) {
    next(new Error('Departure date must be after arrival date'));
  }

  // Check if tour duration is not more than 30 days
  const daysDiff = Math.ceil((this.departureDate - this.arrivalDate) / (1000 * 60 * 60 * 24));
  if (daysDiff > 30) {
    next(new Error('Tour duration cannot exceed 30 days'));
  }

  next();
});

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema);