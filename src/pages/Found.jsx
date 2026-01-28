import { useState } from 'react'
import Card from '../components/Card/Card'
import BubbleAnimation from '../components/BubbleAnimation/BubbleAnimation'
import styles from './Found.module.css'
import { Link } from 'react-router-dom'

const ITEMS_DATA = [
    {
        id: 1,
        title: 'Charger',
        location: 'Dapur Asrama',
        category: 'Elektronik',
        gambar: '/charger.jpg',
        desc: 'Charger laptop merek Asus dengan kabel sepanjang 1.5 meter, hilang di area dapur asrama. Sangat dibutuhkan untuk keperluan kuliah.'
    },
    {
        id: 2,
        title: 'Pulpen',
        location: 'Perpustakaan',
        category: 'ATK',
        gambar: '/charger.jpg',
        desc: 'Pulpen hitam dengan ujung runcing, hilang di area perpustakaan lantai 3 dekat rak buku referensi.'
    },
    {
        id: 3,
        title: 'Jaket Hoodie',
        location: 'Kantin Utama',
        category: 'Pakaian',
        gambar: '/charger.jpg',
        desc: 'Jaket hoodie warna biru navy dengan logo kampus di bagian dada, sangat berharga karena hadiah wisuda.'
    },
    {
        id: 4,
        title: 'USB Flash Drive',
        location: 'Ruang Komputer',
        category: 'Elektronik',
        gambar: '/charger.jpg',
        desc: 'USB flash drive 64GB warna merah dengan gantungan kunci, berisi file tugas akhir yang sangat penting.'
    },
    {
        id: 5,
        title: 'Buku Catatan',
        location: 'Kelas A101',
        category: 'ATK',
        gambar: '/charger.jpg',
        desc: 'Buku catatan hardcover berwarna coklat dengan tanda tangan pemilik di halaman pertama. Berisi catatan kuliah semester ini.'
    },
    {
        id: 6,
        title: 'Topi Baseball',
        location: 'Lapangan Olahraga',
        category: 'Pakaian',
        gambar: '/charger.jpg',
        desc: 'Topi baseball merah dengan logo universitas dan bordir nama di bagian belakang.'
    }
]

const CATEGORIES = ['Semua', 'Elektronik', 'ATK', 'Pakaian']

export default function Found() {
    const [selectedCategory, setSelectedCategory] = useState('Semua')
    const [isAnimating, setIsAnimating] = useState(false)

    const filteredItems = selectedCategory === 'Semua' 
        ? ITEMS_DATA 
        : ITEMS_DATA.filter(item => item.category === selectedCategory)

    const handleCategoryChange = (category) => {
        setIsAnimating(true)
        setSelectedCategory(category)
        setTimeout(() => setIsAnimating(false), 300)
    }

    return (
        <div className={styles.container}>
            <BubbleAnimation />
            
            <Link className={styles.back} to={'/'} aria-label="Kembali ke halaman utama">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
            </Link>

            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Lost & Found</h1>
                <p className={styles.subtitle}>Temukan barang hilangmu di sini</p>
            </div>
            
            <div className={styles.filterContainer}>
                <span className={styles.filterLabel}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    Filter Kategori
                </span>
                <div className={styles.filterButtons}>
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
                            onClick={() => handleCategoryChange(category)}
                            aria-pressed={selectedCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.resultsInfo}>
                <span className={styles.itemCount}>
                    {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} ditemukan
                </span>
            </div>

            <div className={`${styles.list} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div 
                            key={item.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Card 
                                title={item.title} 
                                location={item.location} 
                                gambar={item.gambar}
                                category={item.category}
                            >
                                {item.desc}
                            </Card>
                        </div>
                    ))
                ) : (
                    <div className={styles.noResults}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
                        </svg>
                        <p>Tidak ada item dalam kategori ini</p>
                        <span>Coba pilih kategori lain untuk melihat item tersedia</span>
                    </div>
                )}
            </div>
        </div>
    )
}