import { getVeggies, getEntrees, getSides, getPurchases } from "./database.js"
const veggies = getVeggies()
const entrees = getEntrees()
const sides = getSides()

const buildOrderListItem = (order) => {


    const foundVeggie = veggies.find(
        (veggie) => {
            return veggie.id === order.veggieId
        }
    )

    const foundEntree = entrees.find(
        (entree) => {
            return entree.id === order.entreeId
        }
    )

    const foundSide = sides.find(
        (side) => {
            return side.id === order.sideId
        }
    )

    const veggiePrice = foundVeggie.price
    const entreePrice = foundEntree.price
    const sidePrice = foundSide.price

    const totalCost = veggiePrice + entreePrice + sidePrice

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
        return `<li>
            Receipt #${order.id} = ${costString}
    </li>`
    // return `<li>
    //     Receipt #${order.id} = ${totalCost.toLocaleString("en-US", {
    //         style: "currency",
    //         currency: "USD"
    //     })}
    // </li>`
}

export const Sales = () => {

    const sales = getPurchases()

    let html = "<ul>"

    const listItems = sales.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
    // original code idk if this works or nah
    // return `
    //     <ul>
    //         ${sales.map(
    //             (sale) => {
    //                 // Reflect: What is the scope of this `return` keyword?
    //                 return buildOrderListItem(sale)
    //             }
    //         ).join("")}
    //     </ul>
    // `
}

