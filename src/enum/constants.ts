import { SelectData } from "@/packages/ui";
import { Gender, UserRole, UserStatus } from "@prisma/client";
import { startCase } from "lodash";

export const genderList: SelectData[] = Object.values(Gender).map((value) => ({
  value,
  title: startCase(value),
  id: "d71c4764-aaa6-54b2-8d5b-5841fbd18c7b",
}));

export const userRoles: SelectData[] = Object.values(UserRole).map((value) => ({
  value,
  title: startCase(value),
  id: "95718412-fe6c-50e4-a4b7-fa05a740fd9a",
}));

export const userStatus: SelectData[] = Object.values(UserStatus).map(
  (value) => ({
    value,
    title: startCase(value),
    id: "f3092673-a924-5a07-8e12-26951f7764e3",
  }),
);

export const quotes = [
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream it. Believe it. Build it.",
  "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are not willing to risk the usual, you will have to settle for the ordinary. – Jim Rohn",
  "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "People who are crazy enough to think they can change the world, are the ones who do. – Rob Siltanen",
  "Whether you think you can or think you can’t, you’re right. – Henry Ford",
  "We may encounter many defeats but we must not be defeated. – Maya Angelou",
  "Knowing is not enough; we must apply. Wishing is not enough; we must do. – Johann Wolfgang Von Goethe",
  "Imagine your life is perfect in every respect; what would it look like? – Brian Tracy",
  "Security is mostly a superstition. Life is either a daring adventure or nothing. – Helen Keller",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Creativity is intelligence having fun. – Albert Einstein",
  "What you lack in talent can be made up with desire, hustle, and giving 110% all the time. – Don Zimmer",
  "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
  "Develop an ‘Attitude of Gratitude’. Say thank you to everyone you meet for everything they do for you. – Brian Tracy",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "To see what is right and not do it is a lack of courage. – Confucius",
  "Reading is to the mind, as exercise is to the body. – Brian Tracy",
  "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. – Brian Tracy",
  "The future belongs to the competent. Get good, get better, be the best! – Brian Tracy",
  "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded. – Jack Canfield",
  "Things work out best for those who make the best of how things work out. – John Wooden",
  "A room without books is like a body without a soul. – Marcus Tullius Cicero",
  "I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time. – Michael Phelps",
  "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals. – Michelle Obama",
  "Today’s accomplishments were yesterday’s impossibilities. – Robert H. Schuller",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "If you cannot do great things, do small things in a great way. – Napoleon Hill",
  "Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino",
  "We generate fears while we sit. We overcome them by action. – Dr. Henry Link",
  "The man who has confidence in himself gains the confidence of others. – Hasidic Proverb"
];
