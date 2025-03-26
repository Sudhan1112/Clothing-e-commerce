# 🛍️ Clothing E-Commerce Platform

## 🌟 Project Overview
A **full-stack e-commerce application** designed to provide a seamless online shopping experience for fashion enthusiasts. This platform focuses on a **modern UI/UX**, robust **state management**, and efficient **backend integration**, ensuring smooth navigation, product exploration, and purchase completion.

## 🎯 Features

### ✅ 1. Product List Page
- Responsive **grid display** showcasing products.
- Displays **images, names, brands, and prices**.
- **Add to Bag** button for quick cart addition.
- Optimized **mobile & desktop views**.

**Tech Stack:**
- **React Components** for rendering.
- **Tailwind CSS** for modern, responsive styling.
- **Dynamic product fetching** from backend API.

---
### ✅ 2. Product Detail View
- **Detailed product page/modal** on click.
- Displays **description, price, mock reviews**.
- "Add to Bag" functionality.
- **Smooth modal transitions** for better UX.

**Enhancements:**
- Intuitive **product information layout**.
- Optimized for **mobile-first design**.

---
### ✅ 3. Shopping Cart ("My Bag")
- Accessible via **navigation bar**.
- **Side-drawer/modal** interface.
- Displays:
  - Added products.
  - Product quantities.
  - Individual & total prices.
  - Remove & quantity adjust options.

**State Management:**
- **Real-time updates** for cart.
- **Persistent cart state** for user sessions.

---
### ✅ 4. State Management
- Implemented using **React Context API**.
- Centralized handling for:
  - **User authentication**.
  - **Shopping cart**.
  - **Product interactions**.
- Ensures **smooth UX across components**.

---
## 🚀 Tech Stack

### 🖥️ Frontend:
- **React + Vite ⚡**
- **Tailwind CSS** for UI design.
- **React Context API** for state management.

### 🛠 Backend:
- **Node.js + Express** for API development.

### 🗄 Database:
- **MongoDB 🍃** for data persistence.

### 🔐 Authentication:
- **JWT-based authentication**.

### 📸 Image Management:
- **Cloudinary** for image storage & optimization.

---
## 🚀 Optional Enhancements

### ✅ Backend Integration
- **Custom REST APIs** for product handling.
- **Dynamic product data fetching**.
- **Mock data insertion** via Bruno API testing.

---
## 🌐 Key API Endpoints

### 🛍️ Product Routes
- `GET /products/list` - Fetch all products.
- `POST /products/single` - Fetch single product details.

### 🛒 Cart Routes
- `POST /cart/get` - Retrieve user’s cart.
- `POST /cart/add` - Add item to cart.
- `POST /cart/update` - Update cart items.

### 👤 User Routes
- `POST /user/register` - User registration.
- `POST /user/login` - User authentication.

---

## Home Page🏠
![image](https://github.com/user-attachments/assets/4db8b681-ba73-4103-bfa4-82b09023ea45)

## 🏗️ Design Challenges & Solutions

### 🤔 Key Challenges
- **Complex UI/UX**: Ensuring **intuitive, responsive design**.
- **State Management**: Efficient handling of global states.

### 💡 Solutions
- **React Context API** for centralized state handling.
- **Reusable & modular components**.
- **Mobile-first approach** for better performance.

---
## Project Structure

```plaintext
clothing-e-commerce/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js         # Cloudinary image upload configuration
│   │   └── mongodb.js            # MongoDB database connection setup
│   │
│   ├── controllers/
│   │   ├── cartController.js     # Handles cart-related operations (add, remove, update)
│   │   ├── orderController.js    # Manages order creation, tracking, and processing
│   │   ├── productController.js  # CRUD operations for product management
│   │   └── userController.js     # User authentication and profile management
│   │
│   ├── middleware/
│   │   ├── adminAuth.js          # Middleware for admin route protection
│   │   ├── auth.js               # JWT authentication middleware
│   │   └── multer.js             # File upload middleware configuration
│   │
│   ├── models/
│   │   ├── orderModel.js         # Mongoose schema for orders
│   │   ├── productModel.js       # Mongoose schema for products
│   │   └── userModel.js          # Mongoose schema for user accounts
│   │
│   ├── routes/
│   │   ├── cartRoute.js          # API routes for cart operations
│   │   ├── orderRoute.js         # API routes for order management
│   │   ├── productRoute.js       # API routes for product CRUD
│   │   └── userRoute.js          # API routes for user authentication
│   │
│   ├── .env                      # Environment variables (DB connection, secrets)
│   ├── .gitignore                # Git ignore file
│   ├── package.json              # Backend dependencies and scripts
│   ├── package-lock.json         # Locked dependency versions
│   ├── server.js                 # Main Express server entry point
│   └── bruno-testing/            # Bruno API testing collection
│
├── frontend/
│   ├── node_modules/             # React dependencies
│   ├── public/                   # Static assets
│   │
│   ├── src/
│   │   ├── assets/               # Static images, logos, etc.
│   │   │
│   │   ├── components/           # Reusable React components
│   │   │   ├── BestSeller.jsx    # Best-selling products component
│   │   │   ├── CartTotal.jsx     # Cart total calculation component
│   │   │   ├── Footer.jsx        # Site footer component
│   │   │   ├── Hero.jsx          # Landing page hero section
│   │   │   ├── LatestCollection.jsx  # Latest product collection display
│   │   │   ├── Navbar.jsx        # Site navigation component
│   │   │   ├── NewsletterBox.jsx # Newsletter signup component
│   │   │   ├── OurPolicy.jsx     # Store policies display
│   │   │   ├── ProductItem.jsx   # Individual product display
│   │   │   ├── RelatedProducts.jsx  # Related products suggestion
│   │   │   ├── SearchBar.jsx     # Product search functionality
│   │   │   └── Title.jsx         # Reusable page title component
│   │   │
│   │   ├── context/              # React context for global state
│   │   │   └── ShopContext.jsx   # Shopping cart and user context
│   │   │
│   │   ├── pages/                # Individual page components
│   │   │   ├── About.jsx         # About us page
│   │   │   ├── Cart.jsx          # Shopping cart page
│   │   │   ├── Collection.jsx    # Product collection page
│   │   │   ├── Contact.jsx       # Contact us page
│   │   │   ├── Home.jsx          # Landing/homepage
│   │   │   ├── Login.jsx         # User login page
│   │   │   ├── Orders.jsx        # User order history
│   │   │   ├── PlaceOrder.jsx    # Order placement page
│   │   │   ├── Product.jsx       # Individual product details page
│   │   │   ├── Verify.jsx        # User verification page
│   │   │   └── Products.jsx      # All products listing page
│   │   │
│   │   ├── App.jsx               # Main React application component
│   │   ├── index.css             # Global CSS styles
│   │   ├── main.jsx              # React application entry point
│   │   └── vite.config.js        # Vite configuration
│   │
│   ├── .gitignore                # Git ignore file
│   ├── index.html                # Main HTML entry point
│   ├── package.json              # Frontend dependencies and scripts
│   └── package-lock.json         # Locked dependency versions
│
├── README.md                     # Project documentation
```

## 🔧 Local Setup Guide

### Prerequisites
- **Node.js (v16+)**
- **MongoDB Account**
- **Cloudinary Account**

### Installation Steps

#### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/clothing-ecommerce.git
cd clothing-ecommerce
```

#### 2️⃣ Backend Setup
```sh
cd backend
npm install
```

#### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
```

#### 4️⃣ Environment Configuration
Create `.env` files in **backend & frontend**, and add:
```sh
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=your_cloudinary_connection_url
```

#### 5️⃣ Run the Application
```sh
# Start backend
npm run dev

# Start frontend
npm run dev
```

---
## 🤝 Contributing
1. **Fork** the repository.
2. **Create** your feature branch (`git checkout -b feature-xyz`).
3. **Commit** your changes (`git commit -m 'Added feature XYZ'`).
4. **Push** to the branch (`git push origin feature-xyz`).
5. **Open a Pull Request**.

---
## 📞 Connect With Me
📧 Email: sudhanssudhan83@gmail.com  
🌐 LinkedIn: [Connect on LinkedIn]([https://linkedin.com/in/your-profile](https://www.linkedin.com/in/sudhan-s-a76b8b297/))  
🐙 GitHub: [GitHub Profile]([https://github.com/sudhan1112](https://github.com/sudhan1112))  
