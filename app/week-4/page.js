import NewItem from "./new-item";

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-950 shadow-md">
            <h1 className="mb-8 text-3xl font-bold font">Add New Items</h1>
            <NewItem />
        </div>
    );
};

export default Page;