let cat = {
    name: "Black",
    color: "Black",
    age: 3,
    isMan: false,
    children: [
        {
            name: "Yellow",
            age: 0.4,
            sayMeow: function () {
                alert(this.name + ": Meow!");
            }
        },
        {
            name: "Red",
            age: 0.3,
            sayMeow: function () {
                alert(this.name + ": Meow!");
            }
        }
    ]
};

cat.sayMeow = function () {
    alert(this.name + ": Meow!");
}

delete cat.age;
// console.log(cat.age);
cat.age = 4;
// console.log(cat.age);

// console.log(cat.children);

for(let kitten of cat.children) {
    // console.log(kitten);
    for (let key in kitten) {
        if (key == 'name') {
            console.log("Имя котенка: " + kitten[key]);
        }
        if (key == 'age') {
            console.log("Возраст котенка: " + kitten[key]);
        }
    }
    kitten.sayMeow();
}

cat.sayMeow();