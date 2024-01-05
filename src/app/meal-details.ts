// mealdetails.model.ts

// TypeScript interfaces are used to declare the expected form (structure) of an object. 
// In this case, the MealDetails interface defines the expected structure for an object representing details of a meal.
export interface MealDetails {
  name: string;
  img: string;
  description: string;
  ingredients: string[];
  measures: string[];
}