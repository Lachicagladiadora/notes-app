import { CSSProperties, ReactNode } from "react"
import { Button } from "./Button"

type NotificationProps = {
    children: ReactNode,
    yesDelete: () => void,
    noDelete: () => void,
    style?: CSSProperties
}
export const Notification = ({ children, yesDelete, noDelete, style }: NotificationProps) => {

    return (
        <div
            style={{
                background: '#00000099',
                width: '100vw',
                height: '100vh',
                padding: '350px 300px',
                position: 'fixed',
                top: '0px',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                zIndex: '1',
                ...style
            }}>
            {children}
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    
                }}
            >
                <Button onClick={yesDelete}>
                    {"yes, delete"}
                </Button>
                <Button onClick={noDelete}>
                    {"CANCEL"}
                </Button>
            </div>
        </div>
    )
}