import React from 'react'

import Style from '../styles/subscription.module.css'
import Subscription from '../Subscription/Subscription'

const subscription = () => {
    const subscriptionArray = [
        {
            plan: "Starter",
            price: "$5/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customizations"],
            info: "info info info info info info info info info info info info "
        },
        {
            plan: "Basic",
            price: "$15/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customizations"],
            info: "info info info info info info info info info info info info "
        },
        {
            plan: "Pro",
            price: "$50/mo",
            popular: "",
            service: ["Automated Reporting", "Faster Processing", "Customizations"],
            info: "info info info info info info info info info info info info "
        },
    ]
  return (
    <div className={Style.subscription}>
        <div className={Style.subscription_box}>
            <div className={Style.subscription_box_info}>
                <h1>Subscription</h1>
                <p>This description This description This description </p>
            </div>
            <div className={Style.subscription_box_box}>
                {subscriptionArray.map((el, i)=> (
                <Subscription key={i + 1} i={i} el={el}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default subscription