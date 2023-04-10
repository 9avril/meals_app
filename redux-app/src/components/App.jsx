import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
import {useGetRecipeQuery} from "../store/api/api.js";
import CreateRecipe from "./create-recipe/CreateRecipe.jsx";
import {useState} from "react";

function App() {

    const [searchTerm, setSearchTerm] = useState('')
    const {isLoading, data} = useGetRecipeQuery(searchTerm);
    const [isSearch, setIsSearch] = useState(false)

    const handleSearch = () => {
        setIsSearch(true)
    }


    return (
        <section>
            <Header/>
            <CreateRecipe/>
            <div style={{
                padding: 10,
            }}>
                <p>Want to find some meals?</p>
                <input
                    type={'search'}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder={'Enter search meal'}
                />
                {/*<button onClick={handleSearch}>Search</button>*/}
            </div>
            <div>
                {isLoading ? <div>Loading...</div> : data ? data.map(recipe =>
                    <RecipeItem
                        key={recipe.id}
                        recipe={recipe}
                    />) : <p>Not found...</p>}
            </div>
        </section>
    );
}

export default App;
