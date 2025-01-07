import{Product} from "./product"
import React, { useState } from 'react'


function Card({ product }) {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubtract = () => {
    if (count > 0) setCount(count - 1)
  }

  const totalPrice = count * product.price

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={product.image} alt={product.title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">
          {product.price.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
          })}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAdd}
        >
          Tambah
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
          onClick={handleSubtract}
        >
          Kurang
        </button>
        <p className="text-gray-700 text-base mt-2">
          Total: {totalPrice.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
          })}
        </p>
      </div>
    </div>
  )
}

export default function Praktek1() {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
