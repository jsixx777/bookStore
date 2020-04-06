import * as React from "react"

export interface TemplateProps {
    
}
 
export interface TemplateState {
    
}
 
class Template extends React.Component<TemplateProps, TemplateState> {
    constructor(props: TemplateProps){
        super(props)
        this.state = {
            
        }
    }
    render() { 
        return ( 
            <h1 className="text">Template Page</h1>
         )
    }
}
 
export default Template;