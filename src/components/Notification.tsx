import { CSSProperties,ReactNode } from "react"
import { Button } from "./Button"

type NotificationProps={
    children:ReactNode,
    yesDelete: ()=>void,
    noDelete: ()=>void,
    style?:CSSProperties
}
export const Notification=({children,yesDelete,noDelete,style}:NotificationProps)=>{

    return (
        <div 
            style={{
                border:'solid 2px red', 
                background:'black', 
                borderRadius:'15px', 
                width:'800px', 
                height:'800px', 
                padding: '300px 200px', 
                position:'fixed', 
                top:'97px', 
                display:'flex', 
                flexDirection:'column', 
                alignSelf:'center', 
                alignItems:'center', 
                justifyContent:'space-around', 
                zIndex:'1', 
                ...style}}>
            {children}
            <Button onClick={yesDelete}>
                {"yes, delete"} 
            </Button>
            <Button onClick={noDelete}>
                {"NO delete"} 
            </Button>
        </div>
    )}