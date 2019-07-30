import React from 'react';
import { Link } from 'react-router-dom';

const YOUR_API_KEY = process.env.REACT_APP_API_KEY;

class RecipeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null
        };
    }

    componentDidMount() {
        this.searchRecipe(this.props.match.params.id);
    }

    searchRecipe(recipeId) {
        fetch(`https://www.food2fork.com/api/get?key=${YOUR_API_KEY}&rId=${recipeId}`)
            .then(response => response.json())
            .then(data => this.setState({
                recipe: data.recipe
            }));
    }

    render() {
        if (this.state.recipe) {
            const {
                image_url,
                recipe_id,
                title,
                publisher,
                source_url,
                ingredients
            } = this.state.recipe;

            return (
                <div className="container">
                    <div className="active-recipe">
                        <img
                            className="active-recipe__img"
                            src={image_url}
                            alt={recipe_id}
                        />
                        <h3
                            className="active-recipe__title"
                        >
                            {title}
                        </h3>
                        <h4
                            className="active-recipe__publisher"
                        >
                            {publisher}
                        </h4>
                        <p
                            className="active-recipe__website"
                        >Website:
                            <span>
                                <a
                                    href={source_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {source_url}
                                </a>
                            </span>
                        </p>
                        <ul>
                            {
                                ingredients.map(
                                    (ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    )
                                )
                            }
                        </ul>
                        <button 
                            className="active-recipe__button"
                        >
                            <Link
                                to="/"
                            >
                                Go Home
                            </Link>
                        </button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <p>Fetching Data</p>
            </div>
        );

    }
}

export default RecipeDetail;
