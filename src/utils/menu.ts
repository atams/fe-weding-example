// Types
export interface Category {
    id: string;
    name: string;
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: string;
}

// Data Kategori
export const categories: Category[] = [
    { id: 'all', name: 'Semua Menu' },
    { id: 'makanan', name: 'Makanan' },
    { id: 'minuman', name: 'Minuman' },
    { id: 'dessert', name: 'Dessert' },
    { id: 'snack', name: 'Snack' }
];

// Data Menu
export const menuItems: MenuItem[] = [
    {
        id: '1',
        name: 'Nasi Goreng Special',
        description: 'Nasi goreng dengan telur, ayam, dan sayuran segar',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500',
        categoryId: 'makanan'
    },
    {
        id: '2',
        name: 'Mie Goreng',
        description: 'Mie goreng pedas dengan topping lengkap',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500',
        categoryId: 'makanan'
    },
    {
        id: '3',
        name: 'Ayam Bakar',
        description: 'Ayam bakar dengan bumbu rempah khas Indonesia',
        price: 28000,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500',
        categoryId: 'makanan'
    },
    {
        id: '4',
        name: 'Sate Ayam',
        description: 'Sate ayam dengan bumbu kacang dan lontong',
        price: 20000,
        image: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=500',
        categoryId: 'makanan'
    },
    {
        id: '5',
        name: 'Gado-Gado',
        description: 'Sayuran segar dengan saus kacang spesial',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500',
        categoryId: 'makanan'
    },
    {
        id: '7',
        name: 'Es Teh Manis',
        description: 'Teh manis dingin yang menyegarkan',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500',
        categoryId: 'minuman'
    },
    {
        id: '8',
        name: 'Es Jeruk',
        description: 'Jus jeruk segar dengan es batu',
        price: 8000,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500',
        categoryId: 'minuman'
    },
    {
        id: '9',
        name: 'Kopi Susu',
        description: 'Kopi susu hangat atau dingin',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500',
        categoryId: 'minuman'
    },
    {
        id: '11',
        name: 'Jus Alpukat',
        description: 'Jus alpukat creamy dengan susu coklat',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500',
        categoryId: 'minuman'
    },
    {
        id: '12',
        name: 'Es Campur',
        description: 'Es campur dengan berbagai topping',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500',
        categoryId: 'minuman'
    },
    {
        id: '14',
        name: 'Pudding Coklat',
        description: 'Pudding coklat lembut dengan topping whipped cream',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500',
        categoryId: 'dessert'
    },
    {
        id: '15',
        name: 'Es Krim Vanilla',
        description: 'Es krim vanilla premium dengan topping pilihan',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500',
        categoryId: 'dessert'
    },
    {
        id: '16',
        name: 'Brownies Coklat',
        description: 'Brownies coklat hangat dengan es krim vanilla',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500',
        categoryId: 'dessert'
    },
    {
        id: '17',
        name: 'Pancake',
        description: 'Pancake dengan maple syrup dan butter',
        price: 20000,
        image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500',
        categoryId: 'dessert'
    },
    {
        id: '18',
        name: 'Tiramisu',
        description: 'Tiramisu klasik Italia dengan kopi espresso',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
        categoryId: 'dessert'
    },
    {
        id: '20',
        name: 'Kentang Goreng',
        description: 'French fries dengan saus spesial',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500',
        categoryId: 'snack'
    },
    {
        id: '21',
        name: 'Onion Rings',
        description: 'Onion rings crispy dengan saus mayo',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500',
        categoryId: 'snack'
    },
    {
        id: '22',
        name: 'Chicken Nugget',
        description: 'Nugget ayam dengan saus pilihan',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        categoryId: 'snack'
    },
    {
        id: '23',
        name: 'Nachos',
        description: 'Nachos dengan cheese sauce dan salsa',
        price: 20000,
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500',
        categoryId: 'snack'
    },
    {
        id: '24',
        name: 'Spring Roll',
        description: 'Lumpia goreng dengan saus asam manis',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=500',
        categoryId: 'snack'
    }
];