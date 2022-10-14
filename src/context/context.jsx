import React, {Component, createContext} from "react"

const rootContext = createContext();
const Provider = rootContext.Provider;

// PROVIDER
const GlobalProvider = (Children) => {
    return (
        class ParentComponent extends Component {
            // STATE MANAGEMENT MENGGUNAKAN CONTEXT
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

// CONSUMER
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

