const Item = ({ name, quantity, category}) => {
    return (
        <li className="m-4 p-2 list-none bg-green-200 border text-green-950 w-1/4 rounded-lg">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="mt-[0.5rem]">{`Buy ${quantity} in ${category} aisle`}</p>
        </li>
    );
}

export default Item;