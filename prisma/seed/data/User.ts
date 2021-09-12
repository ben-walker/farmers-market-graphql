import { Prisma } from "@prisma/client";

const passwordHash =
  "$argon2id$v=19$m=4096,t=3,p=1$L38Y9FGzcGrOpwXp9dxYMg$IHcKAuOBKIl4FzMrClTjBYNEDJ7zEIc8SpxXFrK3vgU";

export const userInput: Prisma.UserCreateManyInput[] = [
  { id: "1", email: "fox@email.com", fullName: "Fox Marie", passwordHash },
  { id: "2", email: "cow@email.com", fullName: "Cow Pollin", passwordHash },
  { id: "3", email: "dog@email.com", fullName: "Dog Fuschi", passwordHash },
  { id: "4", email: "cat@email.com", fullName: "Cat Grante", passwordHash },
  { id: "5", email: "bull@email.com", fullName: "Bull Tres", passwordHash },
];
