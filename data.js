import bcrypt from 'bcryptjs';
var salt = bcrypt.genSaltSync(10);
const data = {
    users: [
        {
            name: "Admin",
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('123456', salt),
            isAdmin: true
        },
        {
            name: "John",
            email: 'user@gmail.com',
            password: bcrypt.hashSync('123456', salt),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: "Nike Slim Shirt1",
            slug: 'nike-slim-shirt1',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        {
            name: "Nike Slim Pant1",
            slug: 'nike-slim-pant1',
            category: 'Pants',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 20,
            description: 'high quality shirt'
        },
        {
            name: "Adidas Fit Pant",
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 12,
            description: 'high quality shirt'
        },
        {
            name: "Nike Slim Shirt",
            slug: 'nike-slim-shirts',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality shirt'
        },
    ]
}

export default data;