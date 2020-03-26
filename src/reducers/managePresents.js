export function managePresents(prevState = { numberOfPresents: 0 }, action) {
    switch (action.type) {
        case "INCREASE":
            return { ...prevState, numberOfPresents: prevState.numberOfPresents + 1 }
        default:
            return prevState
    }
}
