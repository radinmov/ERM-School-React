import useTitle from "../../Componets/Hook/useTitle"

export const Home = () => {
    useTitle("HomePage")
    return (
        <p className="bg-sky-600">welcome to home page </p>
    )
}