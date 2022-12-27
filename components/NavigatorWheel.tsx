import React from 'react'
import styles from './NavigatorWheel.module.css'

type Props = {}

const NavigatorWheel = (props: Props) => {
    return (
        <div style={{
            position: 'relative'
        }}>

            <div style={{
                transform: 'rotate(180deg)',
                top: '100px'
            }} className={styles.halfWhiteCircle}></div>
            <div style={{
                transform: 'rotate(270deg)',
                top: '50px',
                left: '-50px'
            }} className={styles.halfWhiteCircle}></div>
            <div style={{
                backgroundColor: 'white',
                height: '100px',
                width: '100px',
                borderRadius: '50%',
                border: 0,
                position: 'absolute',
                top: 50,
                left: 50,
                zIndex: 2,
            }}
            ></div>
            <button style={{
                backgroundColor: 'grey',
                height: '200px',
                width: '200px',
                borderRadius: '50%',
                border: 0,
                zIndex: 1,
                position: 'absolute',
            }}
            ></button>

        </div>
    )
}

export default NavigatorWheel