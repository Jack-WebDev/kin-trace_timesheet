import { PrismaClient } from "@prisma/client";
import argon from "argon2";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

function generateIdNumber() {
  const RSA_ID_NUMBER_LENGTH = 13;
  const RSA_ID_NUMBER_CHARS = "0123456789";
  let RSA_ID_NUMBER = "";

  for (let i = 0; i < RSA_ID_NUMBER_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * RSA_ID_NUMBER_CHARS.length);
    RSA_ID_NUMBER += RSA_ID_NUMBER_CHARS[randomIndex];
  }
  return RSA_ID_NUMBER;
}

function getRole() {
  const roles = ["Admin", "Employee", "Manager"];
  return roles[Math.floor(Math.random() * roles.length)];
}

async function insertData() {
  const departments = await Promise.all([
    prisma.department.create({
      data: {
        id: faker.string.uuid(),
        name: "Finance",
      },
    }),
    prisma.department.create({
      data: {
        id: faker.string.uuid(),
        name: "H.R",
      },
    }),
    prisma.department.create({
      data: {
        id: faker.string.uuid(),
        name: "I.T",
      },
    }),
  ]);

  await prisma.project.createMany({
    data: [
      {
        id: faker.string.uuid(),
        name: faker.company.buzzPhrase(),
        client: faker.company.name(),
        manager: faker.string.uuid(),
        description: faker.lorem.sentence(5),
        projectTeam: [
          faker.person.firstName(),
          faker.person.firstName(),
          faker.person.firstName(),
        ],
        departmentId: departments[0].id,
        createdAt: faker.date.recent(),
      },
      {
        id: faker.string.uuid(),
        name: faker.company.buzzPhrase(),
        client: faker.company.name(),
        manager: faker.string.uuid(),
        description: faker.lorem.sentence(5),
        projectTeam: [
          faker.person.firstName(),
          faker.person.firstName(),
          faker.person.firstName(),
        ],
        departmentId: departments[1].id,
        createdAt: faker.date.recent(),
      },
      {
        id: faker.string.uuid(),
        name: faker.company.buzzPhrase(),
        client: faker.company.name(),
        manager: faker.string.uuid(),
        description: faker.lorem.sentence(5),
        projectTeam: [
          faker.person.firstName(),
          faker.person.firstName(),
          faker.person.firstName(),
        ],
        departmentId: departments[2].id,
        createdAt: faker.date.recent(),
      },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        id: faker.string.uuid(),
        email: "jack@mail.co.za",
        title: "Mr",
        password: await argon.hash("jack@123"),
        ethnicity: "Black",
        gender: "Male",
        status: "Active",
        role: "Employee",
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        contactNumber: faker.phone.number(),
        idNumber: generateIdNumber(),
        name: "Jack",
        surname: "Mbulazi",
        ndtEmail: "jack@ndt.co.za",
        officeLocation: "Johannesburg",
        position: "Software Engineer",
        employeeType: "Contract",
        maritalStatus: "Married",
        postalCode: faker.location.zipCode(),
        province: "Gauteng",
        leaveDays: "10",
        startDate: "2023-01-01",
        dob: "1990-01-01",
        departmentId: departments[0].id,
        createdAt: faker.date.recent(),
      },
      {
        id: faker.string.uuid(),
        email: "james@mail.co.za",
        title: "Mr",
        password: await argon.hash("jack@123"),
        ethnicity: "Black",
        gender: "Male",
        status: "Active",
        role: "Admin",
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        contactNumber: faker.phone.number(),
        idNumber: generateIdNumber(),
        name: "James",
        surname: "Eddington",
        ndtEmail: "james@ndt.co.za",
        officeLocation: "Johannesburg",
        position: "Software Engineer",
        employeeType: "Contract",
        leaveDays: "30",
        maritalStatus: "Married",
        postalCode: faker.location.zipCode(),
        province: "Gauteng",
        startDate: "2023-01-01",
        dob: "1990-01-01",
        departmentId: departments[1].id,
        createdAt: faker.date.recent(),
      },
      {
        id: faker.string.uuid(),
        email: "manager@mail.co.za",
        title: "Mr",
        password: await argon.hash("jack@123"),
        ethnicity: "Black",
        gender: "Male",
        status: "Active",
        role: "Manager",
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        contactNumber: faker.phone.number(),
        idNumber: generateIdNumber(),
        name: "Jack",
        surname: "Manager",
        ndtEmail: "manager@ndt.co.za",
        officeLocation: "Johannesburg",
        position: "Software Engineer",
        employeeType: "Contract",
        maritalStatus: "Married",
        postalCode: faker.location.zipCode(),
        province: "Gauteng",
        leaveDays: "20",
        startDate: "2023-01-01",
        dob: "1990-01-01",
        departmentId: departments[2].id,
        createdAt: faker.date.recent(),
      },
      {
        id: faker.string.uuid(),
        email: faker.internet.email(),
        title: "Mr",
        password: await argon.hash(faker.internet.email()),
        ethnicity: "Black",
        gender: "Male",
        status: "Inactive",
        role: "Employee",
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        contactNumber: faker.phone.number(),
        idNumber: generateIdNumber(),
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        ndtEmail: faker.internet.email(),
        officeLocation: faker.location.streetAddress(),
        position: "Software Engineer",
        employeeType: "Contract",
        maritalStatus: "Married",
        leaveDays: "40",
        postalCode: faker.location.zipCode(),
        province: "Gauteng",
        startDate: "2023-01-01",
        dob: "1990-01-01",
        departmentId: departments[2].id,
        createdAt: faker.date.recent(),
      },

    ],
  });
}

insertData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
