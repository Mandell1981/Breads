const React = require('react')
const Default = require('./layouts/default')


function Show ({bread, index}) {
    return (
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it 
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <li><a href="/breads">Go home</a></li>
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <img src={bread.image} alt={bread.name} />
            <p>{bread.getBakedBy()}</p>
            <a href={`/bread/${bread.id}/edit`}><button>Edit</button></a>
        </Default>
    )
}


module.exports = Show