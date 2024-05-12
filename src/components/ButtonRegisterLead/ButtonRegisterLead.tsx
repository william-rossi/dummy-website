import React from 'react'
import styles from './styles.module.scss'

const ButtonRegisterLead = () => {
    return (
        <div onClick={() => document.getElementById('signUp')?.scrollIntoView({ behavior: 'smooth' })} className={styles.container}>
            <div>
                <svg viewBox="0 0 35 35" data-name="Layer 2" id="ee13b174-13f0-43ea-b921-f168b1054f8d" xmlns="http://www.w3.org/2000/svg"><path d="M29.384,30.381H5.615A5.372,5.372,0,0,1,.25,25.015V9.984A5.371,5.371,0,0,1,5.615,4.619H29.384A5.372,5.372,0,0,1,34.75,9.984V25.015A5.372,5.372,0,0,1,29.384,30.381ZM5.615,7.119A2.868,2.868,0,0,0,2.75,9.984V25.015a2.868,2.868,0,0,0,2.865,2.866H29.384a2.869,2.869,0,0,0,2.866-2.866V9.984a2.869,2.869,0,0,0-2.866-2.865Z" /><path d="M17.486,20.865a4.664,4.664,0,0,1-2.9-.975L1.218,9.237A1.25,1.25,0,1,1,2.777,7.282L16.141,17.935a2.325,2.325,0,0,0,2.7-.007L32.04,7.287a1.249,1.249,0,1,1,1.569,1.945L20.414,19.873A4.675,4.675,0,0,1,17.486,20.865Z" /></svg>
                <span>Sign up</span>
            </div>
        </div>
    )
}

export default ButtonRegisterLead