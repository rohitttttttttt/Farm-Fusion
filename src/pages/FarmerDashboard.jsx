import React, { useState } from 'react';
import './FarmerDashboard.css';

const FarmerDashboard = () => {
    const [earnings, setEarnings] = useState(5000); // Example data
    const [newOrders, setNewOrders] = useState(10); // Example data
    const [listedItems, setListedItems] = useState(5); // Example data
    const [pendingOrders, setPendingOrders] = useState(2); // Example data
    const [items, setItems] = useState([]);

    const handleAddItem = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const weight = e.target.weight.value;
        const productType = e.target.productType.value;
        const img = URL.createObjectURL(e.target.img.files[0]);

        const newItem = { title, description, price, weight, productType, img };
        setItems([...items, newItem]);
        setListedItems(listedItems + 1);
        e.target.reset();
    };

    return (
        <div className="dashboard-container">
            {/* Stat Boxes */}
            <div className="stat-box">
                <h3>Total Earnings</h3>
                <p>₹{earnings}</p>
            </div>
            <div className="stat-box">
                <h3>New Orders</h3>
                <p>{newOrders}</p>
            </div>
            <div className="stat-box">
                <h3>Total Listed Items</h3>
                <p>{listedItems}</p>
            </div>
            <div className="stat-box">
                <h3>Pending Orders</h3>
                <p>{pendingOrders}</p>
            </div>

            {/* Form Container */}
            <div className="form-container">
                <h3>List New Item</h3>
                <form onSubmit={handleAddItem}>
                    <input type="text" name="title" placeholder="Item Name" required />
                    <textarea name="description" placeholder="Item Description" required></textarea>
                    <input type="number" name="price" placeholder="Price (in ₹)" required />
                    <input type="text" name="weight" placeholder="Weight (e.g., 1kg, 500g)" required />
                    <select name="productType" required>
                        <option value="">Select Product Type</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="fruit">Fruit</option>
                        <option value="food-grain">Food Grain</option>
                        <option value="seeds">Seeds</option>
                        <option value="fertilisers">Fertilisers</option>
                    </select>
                    <input type="file" name="img" accept="image/*" required />
                    <button type="submit">Add Item</button>
                </form>
            </div>

            {/* Listed Items */}
            <div className="listed-items">
                <h3>Your Listed Items</h3>
                {items.map((item, index) => (
                    <div key={index} className="item-card">
                        <img src={item.img} alt={item.title} />
                        <div className="item-details">
                            <h4>{item.title}</h4>
                            <p className="price">Price: ₹{item.price}</p>
                            <p className="weight">Weight: {item.weight}</p>
                            <p className="product-type">Type: {item.productType}</p>
                            <p className="description">{item.description}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FarmerDashboard;
