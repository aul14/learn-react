import React, {Component, createContext} from "react"

const rootContext = createContext();
const Provider = rootContext.Provider;

// STATE MANAGEMENT MENGGUNAKAN CONTEXT PROVIDER
const GlobalProvider = (Children) => {
    return (
        class ParentComponent extends Component {
            state = {
                totalOrder: 0
            }
        
            // MEMBUAT ACTION UNTUK MENGUBAH VALUE
            dispatch = (action) => {
                if (action.type == "PLUS_ORDER") {
                    return  this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                } else if (action.type == "MINUS_ORDER" && this.state.totalOrder > 0) {
                    return  this.setState({
                        totalOrder: this.state.totalOrder - 1
                    })
                } else {
                return this.state.totalOrder;
                }    
            }

            render() {
               return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch 
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
               ) 
            }
        }
       
    )
}
export default GlobalProvider;

// STATE MANAGEMENT MENGGUNAKAN CONTEXT CONSUMER
const Consumer = rootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentComsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}

