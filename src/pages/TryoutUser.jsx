import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import DataPertanyaan from '../data-pertanyaa.json'
const TryoutUser = () => {
  const question = DataPertanyaan;
  return (
    <div>
      <header className="App-header">
        <Header name={"userIsAuth"} />
      </header>
      <section className='w-full h-104 flex justify-between p-14'>
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
      <section className='p-10 -mt-52'>
        {question.map((ques, idx) => {
          return (
            <div className='bg-white p-5'>
              <span>{idx + 1}.</span>
              <span> {ques.question}</span>
              <div className='p-3'>
                <input type="radio" id="age1" name="age" value={`${ques.ans_a}`} />
                <label for="age1" className='mx-2'>A. {ques.ans_a}</label><br />
                <input type="radio" id="age2" name="age" value={`${ques.ans_b}`} />
                <label for="age2" className='mx-2'>B. {ques.ans_b}</label><br />
                <input type="radio" id="age3" name="age" value={`${ques.ans_c}`} />
                <label for="age3" className='mx-2'>C. {ques.ans_c}</label><br />
                <input type="radio" id="age3" name="age" value={`${ques.ans_d}`} />
                <label for="age3" className='mx-2'>D. {ques.ans_d}</label><br />
                <input type="radio" id="age3" name="age" value={`${ques.ans_e}`} />
                <label for="age3" className='mx-2'>E. {ques.ans_e}</label><br /><br />
              </div>
            </div>
          )
        })}

        <div className='flex flex-shrink justify-end p-4'>
          <div className='text-center'>
            <Link to="/user/history-tryout-user" type='button' className="p-2 w-32 mx-2 text-black font-semibold bg-secMain border border-secMain rounded ease-linear transition-all duration-150 shadow hover:shadow-lg">
              Selesai
            </Link>
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