import { getEntrees, setEntrees } from "./database.js"

const entrees = getEntrees()

document.addEventListener("change", (event) => {
        if (event.target.name === "entree") {
            setEntrees(parseInt(event.target.value))
         }
    }
)

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
export const Entrees = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const entree of entrees) {
        html += `<li>
            <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
        </li>`
    }

    html += "</ul>"
    return html
}