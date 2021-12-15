import { getVeggies, setVeggies } from "./database.js"

const veggies = getVeggies()

document.addEventListener("change", (event) => {
    if (event.target.name === "veggie") {
        setVeggies(parseInt(event.target.value))
        }
    }
)

// document.addEventListener("change", (event) => {
//     if (event.target.name === "veggie") {
//         setVeggies(event.target.value)
//         }
//     }
// )

export const Veggies = () => {

    let html = `<ul>
        ${
            veggies.map(veggie => {
                return `<li>
                            <input type="radio" name="veggie" value="${veggie.id}" /> ${veggie.type}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}
