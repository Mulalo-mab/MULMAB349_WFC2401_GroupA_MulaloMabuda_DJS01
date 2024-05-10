/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity_kmph = 10000; // Initial velocity in kilometers per hour (km/h)
const acceleration_mps2 = 3; // Spacecraft acceleration in meters per second squared (m/s^2)
const timeInSeconds_s = 3600; // Time in seconds (1 hour)
const initialDistance_km = 0; // Initial distance in kilometers (km)
const amountOfFuel_kg = 5000; // Amount of fuel in kilograms (kg)
const fuelBurnRate_kgps = 0.5; // Fuel burn rate in kilograms per second (kg/s)

// Function to calculate new velocity based on acceleration
const calculateNewVelocity = (initialVelocity, acceleration, time) => {
  // Error handling: Check if parameters are finite numbers
  if (
    !Number.isFinite(initialVelocity) ||
    !Number.isFinite(acceleration) ||
    !Number.isFinite(time)
  ) {
    throw new Error("Invalid input. Please provide valid numeric values.");
  }

  // Convert initial velocity from km/h to m/s
  const initialVelocity_mps = initialVelocity * (1000 / 3600);

  // Calculate change in velocity in m/s
  const deltaVelocity_mps = acceleration * time;

  // Add change in velocity to initial velocity to get new velocity in m/s
  const newVelocity_mps = initialVelocity_mps + deltaVelocity_mps;

  // Convert new velocity from m/s to km/h
  const newVelocity_kmph = newVelocity_mps * (3600 / 1000);

  return newVelocity_kmph; // return new velocity in km/h
};

// Calculate new velocity
const newVelocity_kmph = calculateNewVelocity(
  initialVelocity_kmph,
  acceleration_mps2,
  timeInSeconds_s
);

// Calculate the new distance
const newDistance_km =
  initialDistance_km + (initialVelocity_kmph * timeInSeconds_s) / 3600; // Calculate new distance in km

// Calculating the remaining fuel
const remainingFuel_kg = amountOfFuel_kg - fuelBurnRate_kgps * timeInSeconds_s; // Calculate remaining fuel in kg

// Display corrected results
console.log(`Corrected New Velocity: ${newVelocity_kmph.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance_km.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel_kg.toFixed(2)} kg`);
