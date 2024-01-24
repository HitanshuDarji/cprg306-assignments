import ItemList from "./item-list"

const Page = () => {
    return (
        <main className="bg-green-950">
            <h1 className="text-4xl font-bold text-green-200 p-4">Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;