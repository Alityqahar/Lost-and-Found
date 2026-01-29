import { useState } from 'react'
import styles from './Card.module.css'
import Swal from 'sweetalert2'

export default function Card({ title, location, children, gambar, category, waktu }) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleContactClick = () => {
        Swal.fire({
            title: 'Permintaan Anda Sedang Diproses',
            icon: 'success',
            timer: 2000,
            showConfirmButton: 'false'
        })
    }

    return (
        <div className={`${styles.container} ${isExpanded ? styles.expanded : ''}`}>
            <div className={styles.categoryBadge}>
                <span>{category}</span>
            </div>

            <div className={styles.imageWrapper}>
                <img src={gambar} alt={title} />
                <div className={styles.overlay}></div>
                <div className={styles.imageGradient}></div>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                
                <div className={`${styles.descWrapper} ${isExpanded ? styles.expanded : ''}`}>
                    <p className={styles.desc}>{children}</p>
                </div>

                {children && children.length > 100 && (
                    <button 
                        className={styles.expandBtn}
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-expanded={isExpanded}
                    >
                        {isExpanded ? 'Tampilkan Lebih Sedikit' : 'Selengkapnya'}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="14" 
                            height="14" 
                            fill="currentColor" 
                            viewBox="0 0 16 16"
                            className={isExpanded ? styles.rotated : ''}
                        >
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                )}

                <div className={styles.footer}>
                    <div className={styles.locationContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>
                        <span className={styles.location}>{location}</span>
                    </div>
                    <div className={styles.locationContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 9.71V3.5"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 7-7"/>
                        </svg>
                        <span className={styles.location}>{waktu}</span>
                    </div>
                    <button className={styles.contactBtn} onClick={handleContactClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        Hubungi
                    </button>
                </div>
            </div>

            <div className={styles.sparkle}></div>
        </div>
    )
}