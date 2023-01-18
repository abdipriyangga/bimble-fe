import React from 'react'
import Footer from '../components/Footer'
import { Header } from '../components/Header'

const TryoutUser = () => {
  return (
    <div>
      <header className="App-header">
        <Header name={"userIsAuth"} />
      </header>
      <section className='w-full h-104 flex justify-between p-5'>
        <div className='flex flex-col gap-y-20'>
          <div>
            <span className='text-2xl font-bold text-grey-600'>Tes </span>
            <span className='text-2xl font-bold text-grey-600'>P3K-Guru-Teknis</span>
          </div>
          <div>
            <p className='text-lg font-bold text-grey-600'>Informasi: </p>
            <p className='text-sm font-bold text-grey-600'>Tes seperti soal-soal matematika, setiap 5 Soal terdiri dari gambar yang sama</p>
          </div>
        </div>
        <div>
          <div className='border border-red border-dashed border-spacing-3 p-5'>
            <p className='text-xl font-bold text-grey-600'>Sisa Waktu: </p>
            <p className='text-xl font-bold text-grey-600'>1 Jam 30 Menit 20 Detik</p>
          </div>
        </div>
      </section>
      <section className='p-4 -mt-52'>
        <div>
          <span>1. </span>
          <span> Jika produksi barang mutu B dari tahun 2014 ke tahun 2015 bertambah 26% berapa nilai total produksi barang</span>
          <div className='p-3'>
            <input type="radio" id="age1" name="age" value="30" />
            <label for="age1" className='mx-2'>A. 0 - 30</label><br />
            <input type="radio" id="age2" name="age" value="60" />
            <label for="age2" className='mx-2'>B. 31 - 60</label><br />
            <input type="radio" id="age3" name="age" value="100" />
            <label for="age3" className='mx-2'>C. 61 - 100</label><br /><br />
          </div>
        </div>
      </section>
      <section className='mt-32'>
        <Footer />
      </section>
    </div>
  )
}

export default TryoutUser