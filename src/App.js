import React from "react";
import "./style.css"
import { client } from "./client";
import Cards from "./components/Cards";

class App extends React.Component{
    state = {
        cards: []
    }

    componentDidMount() {
        client.getEntries({
            content_type: "businessCard",
        })
        .then((response) => {
            console.log(response)
            this.setState({
                cards: response.items
            })
        })
        .catch(console.error)
    }

    render() {
        return (
            <Cards cards={this.state.cards} />
        )
    }
}

export default App;