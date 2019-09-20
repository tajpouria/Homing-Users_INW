import * as faker from "faker";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const bool = [true, false];

export const dummyFetchAllUser = {
    id: faker.helpers.randomize(numbers),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.company.companyName(),
    likes: faker.helpers.randomize(numbers),
    liked: faker.helpers.randomize(bool),
    create_at: faker.date.past().toString(),
    avatar: faker.image.avatar()
};

export const dummyFetchSpecificUser = {
    Id: faker.helpers.randomize(numbers),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.company.companyName(),
    likes: faker.helpers.randomize(numbers),
    liked: faker.helpers.randomize(bool),
    create_at: faker.date.past().toString(),
    avatar: faker.image.avatar(),
    address: faker.address.city(),
    about: faker.lorem.paragraph()
};
