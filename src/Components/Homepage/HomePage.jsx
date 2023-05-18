import React from "react";
import styles from "./homepage.module.css";
import Dropdown from "../Dropdown/Dropdown";

const HomePage = () => {
    const options = [
        { value: "State Bank of India", label: "State Bank of India" },
        { value: "Punjab National Bank", label: "Punjab National Bank" },
        { value: "HDFC Bank", label: "HDFC Bank" },
        { value: "ICICI Bank", label: "ICICI Bank" }
    ];
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                Find the bank with maximum interest
            </div>
            <Dropdown className={styles.selectBank} placeHolder="Choose Bank" options={options} />
            <p>Selected Banks</p>
                <span className={styles.heading}>Enter Maturity Period</span>
            <div>
                <input placeholder="Years" className= {`${styles.selectDays} ${styles.left}`} /><input placeholder="Months" className= {`${styles.selectDays} ${styles.mid}`} /><input placeholder="Days" className= {`${styles.selectDays} ${styles.right}`} />
            </div>
            <div className={styles.submitBtn}>
                <button>Show Result</button>
            </div>
            {/* <img className={styles.bg} alt="" src="/assets/house.png" /> */}
        </div>
    )
}

export default HomePage;