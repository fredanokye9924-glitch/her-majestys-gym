
export interface ClassSlot {
  id: string;
  name: string;
  time: string;
  instructor: string;
  capacity: number;
  booked: number;
}

export interface ProgressData {
  day: string;
  calories: number;
  weight: number;
  strength: number;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  avatar: string;
}

export interface NutritionPlan {
  meal: string;
  items: string[];
  calories: number;
}
