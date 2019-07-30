import React from 'react';
import { Link } from 'react-router-dom'

function Recipe(props) {
    return (
        <div
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
        >
            <div className="recipes__box">
                <img
                    className="recipe__box-img"
                    src={props.data.image_url}
                    alt={props.data.recipe_id}
                />
                <div className="recipe__text">
                    <h5
                        className="recipes__title"
                    >
                        {props.data.title}
                    </h5>
                    <p
                        className="recipes__subtitle"
                    >Publisher:
                        <span>
                            {props.data.publisher}
                        </span>
                    </p>
                </div>
                <button className="recipe_buttons">
                    <Link
                        to={{
                            pathname: `/recipe/${props.data.recipe_id}`,
                            state: props.data
                        }}
                    >
                        View Recipe
                    </Link>
                </button>

            </div>
        </div>
    );
}

export default Recipe;