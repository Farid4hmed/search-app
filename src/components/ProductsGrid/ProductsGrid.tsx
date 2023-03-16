import { ChangeEvent, FC, MouseEvent } from 'react';
import styles from "./ProductsGrid.module.css";
export interface IAppProps {
}

const ProductsGrid: FC = () => {
     function handleLike (event: MouseEvent) {
            const id:string = event.currentTarget.id;
            const currLike:string = document.getElementById(`${id}`)!.innerHTML;
            if(currLike === '♡')document.getElementById(`${id}`)!.innerHTML = "♥︎";
            else document.getElementById(`${id}`)!.innerHTML = "♡";
    }   
    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <h2 onClick={event => handleLike(event)} id="1">♡</h2>
                <div className={styles.view}>
                    <h3>View Product</h3>
                </div>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
            <div className={styles.product}>
                <h2>♡</h2>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <h4>Round neck cotton tee</h4>
                <p><del>Rs. 599</del> <b>Rs.549</b></p>
                <p>★★★★★ (210)</p>
            </div>
        </div>
    );
}


export default ProductsGrid;