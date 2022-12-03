const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@ya.ru",
	id: 1,
	about: "О себе....",
	avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};

const users = {
	0: { name: "Вика", lastname: "Шатунова" },
	1: { name: "Егор", lastname: "Котц" },
	2: { name: "Сергей", lastname: "Петров" },
	3: { name: "Константин", lastname: "Травин" },
	4: { name: "Виктор", lastname: "Борн" },
	5: { name: "Элика", lastname: "Лето" },
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}
