"use client";

import { useState } from "react";

const NewItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category
        };
        console.log(item);

        alert(`Name:  ${name}, Quantity: ${quantity}, Categroy: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
            <form className="flex flex-col gap-4 p-12 bg-green-800 rounded-md" onSubmit={handleSubmit}>
                <input 
                className="border-2 border-green-400 bg-white rounded-md text-green-950 pl-1 pr-1 pt-1.5 pb-1.5 hover:bg-green-100 hover:border-green-600 focus:bg-green-100"
                placeholder="Enter item name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
                <input
                className="border-2 border-green-400 bg-white rounded-md text-green-950 pl-1 pr-1 pt-1.5 pb-1.5 hover:bg-green-100 hover:border-green-600 focus:bg-green-100"
                placeholder="Enter quantity"
                name="quantity"
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                required />
                <select
                name="selectCategory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-2 border-green-400 bg-white rounded-md text-green-950 pl-1 pr-1 pt-1.5 pb-1.5 hover:bg-green-100 hover:border-green-600 focus:bg-green-100"
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
                <button
                type="submit"
                className="mt-8 font-bold bg-green-200 rounded-md text-green-950 pl-1 pr-1 pt-1.5 pb-1.5 hover:bg-green-300"
                >
                    Add
                </button>
            </form>
    );
}

export default NewItem;